import Button from '../Button'
export default function card(){
  return(
    <div
      style={{
        backgroundColor: '#d7e1e7',
        borderRadius: '5px',
        padding: '2rem',
        margin: '1rem',
        display: 'flex',
        flexDirection: 'row',
        width: '41rem',
        height: '20rem',
        gap: '2.5rem',
      }}
    >
      <img style={{border:'10px black solid'}} src="https://i.pinimg.com/originals/ba/94/64/ba9464145eba8762f6286a3c8387c951.jpg" alt="" />
      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        <h1
          style={{ fontFamily: 'sans-serif', fontSize: '24px',}}
        >
          Pôster: Star Wars (1967)
        </h1>
        <p style={{ fontFamily: 'sans-serif', fontSize: '12px', textAlign: 'justify'}}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet et omnis magni, molestiae rerum, sint officia impedit natus perferendis cumque totam quas quod! Officiis, repellat nihil optio dicta fuga at.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet et omnis magni, molestiae rerum, sint officia impedit natus perferendis cumque totam quas quod! Officiis, repellat nihil optio dicta fuga at.
        </p>
        <Button />  
      </div>
    </div>
  )
}
