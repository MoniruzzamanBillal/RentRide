//

import Wrapper from "@/components/shared/Wrapper";
import { useAppDispatch } from "@/redux/hook";
import { useNavigate } from "react-router-dom";

const BookForm = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  return (
    <div className="BookFormContainer">
      <Wrapper className="bookFormWrapper ">
        <h1>book form wrapper </h1>
        <h1>book form wrapper </h1>
        <h1>book form wrapper </h1>
        <h1>book form wrapper </h1>
        <h1>book form wrapper </h1>
      </Wrapper>
    </div>
  );
};

export default BookForm;
