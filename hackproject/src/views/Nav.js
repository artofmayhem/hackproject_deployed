import { AppBar } from "@material-ui/core";

export default function Nav(props) {
  const data = props
  console.log("props from Nav component", data);

  return (
    <AppBar position="static" style={{backgroundColor: '#222'}}>
      <div className='d-flex flex-column'>
        <h1 style={{padding: '2vh 3vw'}} className="display-4">アニメハウス</h1>
        <h5 style={{padding: '0 3vw'}}>Anime House</h5>
      </div>
    </AppBar>
  );
}
