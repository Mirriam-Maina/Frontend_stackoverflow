import diary from '../diary';

const diary = { name: 'diary', id: 1 };
describe('Diary reducers', () => {
  it('should provide the initial state', () => {
    expect(diary(undefined, {})).toEqual({});
  });

  it('should add diary to the state', () => {
    expect(diary(diarys, {})).toEqual(todos);
  });
});
