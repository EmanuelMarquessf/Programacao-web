import Card from "./components/Card";


export default function App() {
  const imgs = [
    "https://onebitcode.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fafa8f71e-b860-4ffe-80e8-840697b29b8e%2Fsw-poster.jpg?table=block&id=e9cff459-fed0-49b0-aea1-ed8530451fa1&spaceId=6e5271d8-2f68-42f5-aa75-5978bbff47fa&width=2000&userId=&cache=v2",
    "https://onebitcode.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F8eafc09a-0a73-4e31-b191-bd2a90872950%2Fesb-poster.jpg?table=block&id=f274b4ef-64ac-41a8-8a65-508e21adfbe1&spaceId=6e5271d8-2f68-42f5-aa75-5978bbff47fa&width=2000&userId=&cache=v2",
    "https://onebitcode.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F79257c57-699e-4683-be54-8f39413b3601%2Frotj-poster.jpg?table=block&id=3f628b5c-c187-4aeb-b13c-bac9f7a93c06&spaceId=6e5271d8-2f68-42f5-aa75-5978bbff47fa&width=2000&userId=&cache=v2"
  ]

  const listImgs = imgs.map((img, index) => {
    return <Card key={index} title="Pôster do filme 1" poster={img}/>
  })
  return (
    <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
      {listImgs}
    </div>
  );
}
