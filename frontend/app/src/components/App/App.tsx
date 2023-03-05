import { Routes, Route } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import styled from 'styled-components';
import DashBoard from '../DashBoard/DashBoard';
import { Kanban } from '../Kanban/Kanban';

function App() {
  return (
    <BaseDiv>
      <StyledDiv>
        <RecoilRoot>
          <div className="App">
            <Routes>
              <Route path="/" element={<DashBoard />} />
              <Route path="/kanban" element={<Kanban />} />
            </Routes>
          </div>
        </RecoilRoot>
      </StyledDiv>
    </BaseDiv>
  );
}
const BaseDiv = styled.div`
  display: flex;
  justify-content: center;
`;
const StyledDiv = styled.div`
  max-width: 800px;
  min-width: 600px;
`;
export default App;
