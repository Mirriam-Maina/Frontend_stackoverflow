import { ADD_DIARY } from '../../constants';
import { addDiary } from '..';

describe('Diary action creators', () => {
  it('Should dispatch ADD_DIARY type', () => {
    expect(addDiary({}).type).toEqual(ADD_DIARY);
  });
});
