import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;

  margin-top: 50px;
`;

export const Repository = styled.div`
  width: 250px;
  background: #fff;
  border-radius: 3px;
  margin: 0 10px;

  display: flex;
  flex-direction: column;

  header {
    padding: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;

    img {
      width: 64px;
    }

    strong {
      font-size: 24px;
      margin-top: 10px;
    }

    small {
      font-size: 14px;
      color: #666;
    }
  }

  ul {
    list-style: none;

    li {
      font-weight: bold;
      padding: 12px 20px;

      small {
        font-weight: normal;
        font-size: 12px;
        color: #999;
        font-style: italic;
      }

      &:nth-child(2n - 1) {
        background: #f5f5f5;
      }
    }
  }

  .buttons {
    display: flex;
    justify-content: space-around;
  }

  .update {
    height: 25px;
    padding: 0 20px;
    margin-bottom: 10px;
    background: #007bff;
    color: #fff;
    border: 0;
    font-size: 15px;
    font-weight: bold;
    border-radius: 3px;
    cursor: pointer;

    &:hover {
      background: #007bcf;
    }
  }

  .delete {
    height: 25px;
    padding: 0 20px;
    margin-bottom: 10px;
    background: #f00d;
    color: #fff;
    border: 0;
    font-size: 15px;
    font-weight: bold;
    border-radius: 3px;
    cursor: pointer;

    &:hover {
      background: #f00;
    }
  }
`;
