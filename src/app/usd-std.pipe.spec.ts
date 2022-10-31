import { UsdStdPipe } from './usd-std.pipe';

describe('UsdStdPipe', () => {
  it('create an instance', () => {
    const pipe = new UsdStdPipe();
    expect(pipe).toBeTruthy();
  });
});
