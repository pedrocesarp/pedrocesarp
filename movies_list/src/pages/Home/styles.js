import styled from "styled-components";

export const Container = styled.div `
h1 {
    text-align:center;
    margin: 4rem 0;
    }

`;
export const MovieList = styled.ul `
    list-style: none;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr) );
    column-gap: 3rem;
    row-gap: 4rem;
`;

export const Movie = styled.li`

    display: flex;
    flex-direction: column;
    align-items: center;

img {
    width: 180px;
    border-radius: 1rem;
    margin-bottom: 2rem;
}

span {

    font-weight: bold;
    font-size: 120%;
    text-align: center;
}

a {
    transition: all 0.3s;
}

a:hover {
    transform: scale(1.1);
}

`;

export const ImgPag = styled.img`
    cursor: pointer;
    height: 20px;
    width: 30px

`;

export const DivPag = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  margin-top: 40px;
`;

export const PPag = styled.p`
  font-size: 1.4rem;
  color: white;
  cursor: pointer;
`;


// * Div dos gêneros
export const FilterGenres = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 20px;
    margin: 2rem;
    margin-top:1rem;

    @media (max-width: 768px) {
    justify-content: start;
    width: 100%;
    gap: 15px;
  }

`

// * Card de cada gênero
export const GenresCard = styled.div`
  background-color: #ffff;
  color: #2d0c5e;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 7px;
  padding-bottom: 5px;
  border-radius: 10px;
  cursor: pointer;
  font-weight: 700;
  &:hover {
    transition: 0.2s;
    background-color: #6654da;
    color: #ffff;
  }

  @media (max-width: 768px) {
    padding-left: 15px;
    padding-right: 15px;
  }
`;


// * P da div de gêneros
export const GenresP = styled.p`
  font-size: 16px;
`;

// *card escolhido
export const GenresCardChoosed = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  background-color: #6654da;
  color: #ffff;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 700;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 7px;
  padding-bottom: 5px;
  border-radius: 10px;
  @media (max-width: 768px) {
    padding-left: 15px;
    padding-right: 15px;
  }
`;

//* img cancel
export const ImgCancel= styled.img `

    cursor: pointer;
    height: 15px;
    width: 15px

`

// * título home
export const TitleHome =styled.h2 `
  text-align: center;
  margin: 3rem;
  font-size: 40px;

`

// * subtítulo home
export const SubtitleHome =styled.p `
  text-align: center;
`

