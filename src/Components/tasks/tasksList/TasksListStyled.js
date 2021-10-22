import styled from "styled-components";

export const TasksListContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  .taskListItem {
    width: 25%;
    height: 200px;
    padding: 20px;
  }
  .taskListItemPlus {
    cursor: pointer;
  }
  .taskListItemBorder {
    border: 1px solid #3d3d3d;
    border-radius: 16px;
    padding: 20px;
    width: 100%;
    height: 100%;
  }
  .taskListItemBorderPlus {
    display: flex;
    align-items: center;
    justify-content: center;
    &:hover {
      border: 1px solid #819ff5;
    }
  }
  .taskListItemIcon {
    width: 40px;
    height: 40px;
    fill: #819ff5;
  }
  .taskListItemTitle {
    color: #819ff5;
    font-weight: 600;
  }
  .taskListItemLabelDone {
    display: flex;
    align-items: center;
  }
`;
