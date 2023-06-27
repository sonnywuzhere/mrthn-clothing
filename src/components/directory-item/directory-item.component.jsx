import { useNavigate } from "react-router-dom";

import {
  DirectoryItemContainer,
  BackgoundImage,
  Body,
} from "./directory-item.styles";

const DirectoryItem = ({ category }) => {
  const { imageUrl, title, route } = category;
  const navigate = useNavigate();

  const onNavigateHandler = () => navigate(route);

  return (
    <DirectoryItemContainer onClick={onNavigateHandler}>
      <BackgoundImage imageUrl={imageUrl} />
      <Body to={`/shop/${title}`}>
        <h2>{title}</h2>
        <p>Shop now</p>
      </Body>
    </DirectoryItemContainer>
  );
};

export default DirectoryItem;
