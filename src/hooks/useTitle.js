import { useEffect } from "react";

const useTitle = (title) => {
  useEffect(() => {
    document.title = `travelBro-${title}`;
  }, [title]);
};

export default useTitle;
