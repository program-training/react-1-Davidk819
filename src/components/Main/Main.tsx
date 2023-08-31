import { Card } from "../Card/Card";

export default function Main() {
    return (
        <div className="main">
            {data && data.map((book) => {
                return <Card {...{...book}}/>
            })}
        </div>

    )
}

const data = [
    {
      title: "Nature Scene",
      link: "https://loremflickr.com/320/240",
      text:"kjkj"
    },
    {
      title: "City View",
      link: "https://loremflickr.com/320/240/dog",
      text:"kjkj"
    },
    {
      title: "Abstract Art",
      link: "https://loremflickr.com/320/240/dog",
      text:"kjkj"
    },
  
  ];