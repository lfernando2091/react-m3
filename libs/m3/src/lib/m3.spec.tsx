import { render } from '@testing-library/react';

import M3 from './m3';

describe('M3', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<M3 />);
    expect(baseElement).toBeTruthy();
  });
});
