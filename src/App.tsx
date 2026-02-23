import Button from "./components/base/button/Button";
import Layout from "./components/layout";

function App() {
  return (
    <Layout>
      <div className="text-2xl">ژلاتو هاوس</div>
      <div className="flex justify-center items-center gap-2">
        <Button variant="primary">primary</Button>
        <Button variant="secondary">secondary</Button>
        <Button variant="outline">outline</Button>
        <Button variant="ghost">ghost</Button>
      </div>
    </Layout>
  );
}

export default App;
