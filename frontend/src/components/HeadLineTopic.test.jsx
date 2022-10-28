import { cleanup, fireEvent, render, waitFor } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';

import HeadLineTopic from './HeadLineTopic';

// Note: running cleanup afterEach is done automatically for you in @testing-library/react@9.0.0 or higher
// unmount and cleanup DOM after the test is finished.
afterEach(cleanup);

const mockHeadline = {
  _id: 'mock_id',
  location: 'location',
  fishingGear: 'fishingGear',
  fishImage: '/fishImage',
  fishSize: 'fishSize',
  description: 'description',
};

const renderTarget = () => {
  return render(
    <Router>
      <HeadLineTopic newsTopic={mockHeadline} />
    </Router>
  );
};

describe('HeadLineTopic', () => {
  it('should render correctly from props ', () => {
    const { queryByText } = renderTarget();
    waitFor(() => {
      expect(queryByText(mockHeadline.location)).toBeInTheDocument();
      expect(queryByText(mockHeadline.fishingGear)).toBeInTheDocument();
      expect(queryByText(mockHeadline.fishSize)).toBeInTheDocument();
      expect(queryByText(mockHeadline.description)).toBeInTheDocument();
    });
  });

  it('should redirect to another page when click Read More... link', () => {
    const { queryByText } = renderTarget();
    fireEvent.click(queryByText(/Read More.../i));
    waitFor(() => {
      expect(queryByText(mockHeadline.location)).toBeFalsy();
      expect(queryByText(mockHeadline.fishingGear)).toBeFalsy();
      expect(queryByText(mockHeadline.fishSize)).toBeFalsy();
      expect(queryByText(mockHeadline.description)).toBeFalsy();
    });
  });
});
