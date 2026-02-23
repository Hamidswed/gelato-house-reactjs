import Button from "./components/base/button/Button";
import Layout from "./components/layout";

function App() {
  return (
    <Layout>
      <div className="text-2xl">ژلاتو هاوس</div>
      <div className="flex justify-center items-center gap-2">
        <Button variant="contained" color="primary">
          contained - primary
        </Button>
        <Button variant="contained" color="secondary">
          contained - secondary
        </Button>
        <Button variant="outline" color="primary">
          outline - primary
        </Button>
        <Button variant="outline" color="secondary">
          outline - secondary
        </Button>
        <Button variant="ghost" color="primary">
          ghost - primary
        </Button>
        <Button variant="ghost" color="secondary">
          ghost - secondary
        </Button>
        <Button variant="ghost" color="black">
          ghost - secondary
        </Button>
      </div>
    </Layout>
  );
}

export default App;
