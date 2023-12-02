import { ThreeDots } from 'react-loader-spinner';

export const Loader = () => {
  return (
    <div>
      <ThreeDots
        height="80"
        width="80"
        color="#303f9f"
        ariaLabel="three-dots-loading"
        visible={true}
      />
    </div>
  );
};
