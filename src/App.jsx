import * as React from "react";
import styled, { ThemeProvider } from "styled-components";
import { darkTheme } from "./utils/themes";
import Navbar from "./components/Navbar";
import { BrowserRouter } from "react-router-dom";
import HeroSection from "./components/sectionComponent/HeroSection";
import WrapperSkill from "./components/sectionComponent/wrapperSkill";
import Experience from "./components/sectionComponent/Experience";
import Education from "./components/sectionComponent/Education";
import Contact from "./components/sectionComponent/Contact";
const Body = styled.div`
  margin: 0;
  padding: 0;
  background-color: ${({ theme }) => theme.bg};
  color: ${({ theme }) => theme.text_primary};
  width: 100%;
  
  overflow-x: hidden;
  position: relative;
`;
const Wrapper = styled.div`
  padding-bottom: 100px;
  background: linear-gradient(
      38.73deg,
      rgba(204, 0, 187, 0.15) 0%,
      rgba(201, 32, 184, 0) 50%
    ),
    linear-gradient(
      141.27deg,
      rgba(0, 70, 209, 0) 50%,
      rgba(0, 70, 209, 0.15) 100%
    );
  width: 100%;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 30% 98%, 0 100%);
`;
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("ErrorBoundary caught an error", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children;
  }
}
function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <BrowserRouter>
        <Body>
        <Navbar />
          <div>
            <HeroSection />
            <Wrapper>
              <ErrorBoundary>
                <WrapperSkill />
              </ErrorBoundary>
              <Experience />
            </Wrapper>
            <Wrapper>
              <Education />
              <Contact />
            </Wrapper>
          </div>
        </Body>
      </BrowserRouter>
    </ThemeProvider>
  );
}
export default App;
