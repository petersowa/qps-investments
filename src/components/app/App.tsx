import React from 'react';
import styled from 'styled-components';
import Portfolio from './portfolio/portfolio';
import { Provider } from '../../model/context/context';
import './App.css';

const AppLayout = styled.div`
  display: grid;
  grid-template-areas:
    'navbar navbar navbar'
    'sidebar app rightbar'
    'footer footer footer';
  grid-template-columns: 2rem minmax(30rem, 1fr) minmax(20rem, 30rem);
  grid-template-rows: 3rem minmax(calc(100vh - 5rem), 100%) 2rem;
  padding: 0;
  grid-gap: 0;
`;

const NavbarArea = styled.div`
  display: grid;
  grid-area: navbar;
  position: fixed;
  background-color: #dadada;
  grid-template-areas: 'title navbar';
  grid-template-columns: 20rem 1fr;
  height: 3rem;
  width: 100%;
  align-items: center;
  padding: 0px 0px;
  z-index: 5;
`;

const TitleArea = styled.div`
  font-family: 'Merriweather', serif;
  font-size: 1.5rem;
  color: #eee;
  grid-area: title;
  align-self: center;
  padding-left: 10px;
  color: rgba(90, 40, 120, 0.6);
  background-color: #dadada;
  text-shadow: rgba(0, 0, 0, 0.2) 2px 6px 5px,
    rgba(255, 255, 255, 0.4) 0 -4px 30px;
`;

const NavArea = styled.div`
  display: grid;
  grid-area: navbar;
  grid-auto-columns: 5rem;
  grid-auto-flow: column;
  justify-self: end;
  padding-right: 3px;
  align-self: center;
  grid-gap: 5px;
`;

const RightArea = styled.div`
  grid-area: rightbar;
`;

const SideArea = styled.div`
  display: grid;
  position: fixed;
  grid-area: sidebar;
  width: 12rem;
  height: 100%;
  left: -10rem;
  &:hover {
    left: 0;
  }
  transition: left 0.2s ease-in-out;
  justify-items: center;
  grid-template-columns: 1fr;
  align-content: center;
`;

const AppArea = styled.div`
  grid-area: app;
`;

const FooterArea = styled.div`
  display: grid;
  grid-area: footer;
  align-self: stretch;
  align-content: end;
  background-color: #ccc;
  padding-bottom: 0.3rem;
`;

class App extends React.Component {
  render() {
    return (
      <AppLayout>
        <NavbarArea>
          <TitleArea>GraniteCode Portfolio</TitleArea>

          <NavArea>
            <button>log in</button>
            <button>about</button>
          </NavArea>
        </NavbarArea>
        <AppArea>
          <div
            style={{
              height: '100%',
              padding: '1rem',
            }}
          >
            <Provider>
              <Portfolio />
            </Provider>
          </div>
        </AppArea>
        <RightArea>
          <div
            style={{
              height: '100%',
              backgroundColor: '#eee',
              padding: '1rem',
            }}
          >
            <h1>Side bar</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Non sequi
              sed impedit quas delectus quidem iste illo quo in. Impedit vero,
              dolores quis vel illo laudantium assumenda exercitationem dolor
              amet rerum. Vitae dicta aliquid doloribus reprehenderit, nisi
              odio? Possimus nam a recusandae dolorem voluptate odio accusamus
              eius labore consequatur aspernatur.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatem ratione qui eaque iusto placeat rerum soluta amet
              recusandae fugiat ab nemo quaerat necessitatibus, beatae, voluptas
              a expedita odit culpa, consequatur facilis fugit deserunt
              asperiores cumque eos unde? Repellat eveniet earum rem recusandae,
              facilis eaque quidem. Autem vitae id dicta atque laboriosam amet
              dolorem eveniet veniam accusamus rerum illo at aliquid deserunt
              ratione enim aliquam quod nam, ex quasi iste quis! Sequi dicta
              obcaecati vel eaque at ea possimus itaque consectetur?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero,
              minima! Dolor commodi ipsa asperiores officiis animi iusto
              repellendus iste impedit ut, minus velit aspernatur corrupti autem
              voluptatibus consequuntur eum consequatur nihil beatae, ex aut!
              Dolorum sint aut impedit ratione dolor.
            </p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi
              corrupti vero doloremque repudiandae assumenda, odit illo
              laboriosam fuga deleniti molestias sapiente illum excepturi nulla.
              Maxime dolore et alias, dolorem reiciendis non, cupiditate minus
              sequi dolorum eveniet cumque! Cupiditate provident blanditiis eos?
              Beatae, aspernatur iure reiciendis doloribus enim magni? Provident
              aperiam alias deserunt in quaerat illum illo rem inventore magnam,
              dolorem maiores odit nobis nulla aut quibusdam et ipsum iusto,
              laborum libero non distinctio. Assumenda, porro tempora? Modi
              excepturi debitis unde mollitia saepe hic iste facere voluptate
              totam ad aut assumenda ullam officia, accusamus porro ex, quia,
              quaerat ipsa libero harum. Corporis, natus vero voluptas assumenda
              veniam obcaecati consectetur illum porro quasi perferendis dolor
              iure at minima eum cum, eius nemo libero doloremque. Obcaecati
              repellat quam ex sint voluptatibus accusamus dolorem, nam
              suscipit, ullam possimus at perspiciatis illum sunt. Illum
              voluptates nemo labore, maxime laboriosam, doloremque amet animi
              necessitatibus tempore aliquid culpa assumenda sit neque rem.
              Labore, aut sequi, illum cumque eaque officiis, voluptatum autem
              omnis in repudiandae amet voluptatem rerum doloremque est
              consequatur vitae dolorem reiciendis voluptates? Delectus tempore
              eos, possimus illum laboriosam animi fugiat, hic quaerat doloribus
              numquam minus sit quos quisquam voluptates, quia explicabo
              aspernatur velit quae! Odit?
            </p>
          </div>
        </RightArea>
        <SideArea>
          <button>a</button>
          <button>b</button>
          <button>side</button>
        </SideArea>
        <FooterArea>App by GraniteCode</FooterArea>
      </AppLayout>
    );
  }
}

export default App;
