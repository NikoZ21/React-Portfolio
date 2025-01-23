import NewProject from "./components/NewProject";
import Practice from "./components/Practice";
import SideBar from "./components/SideBar";

function App() {
  return (
    <main className="h-screen my-8 flex gap-8">
      <SideBar />
      <NewProject />
    </main>
  );
}

export default App;
