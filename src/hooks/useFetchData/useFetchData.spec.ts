import { act, renderHook, RenderHookResult } from '@testing-library/react';
import useFetchData, { IUseFetchData } from './useFetchData';
import { mockItem } from '../../tests/mocks/dataMocks';
import { IData } from '../../providers/CheckoutProvider/types';

jest.mock('axios', () => {
  return {
    __esModule: true,
    default: {
      get: () =>
        Promise.resolve({
          data: [
            {
              ...mockItem,
            },
          ],
        }),
    },
  };
});

describe('useFetchData hook', () => {
  it('should fetch and return the data', async () => {
    let hook: RenderHookResult<IUseFetchData, unknown>;

    await act(async () => {
      hook = renderHook(() => useFetchData());
    });

    await act(async () => {
      const response = await hook.result.current.fetch();
      expect((response as IData[])[0].NID).toBe(mockItem.NID);
    });
  });
});
