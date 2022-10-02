import { useState } from 'react'
import './App.css'
import QRCode from 'react-qr-code'
import QRCodeLink from 'qrcode'

function App() {
  const [qrcode, setQrcode] = useState('')
  const [qrcodeLink, setQrcodeLink] = useState('')

  function handleGenerate(link_url) {
    QRCodeLink.toDataURL(link_url, {
      width: 600,
      margin: 3,
    }, (err, url) => {
      setQrcodeLink(url)
    })
  }

  function handleQrcode(event) {
    setQrcode(event.target.value)
    handleGenerate(event.target.value)
  }

  return (
    <div className='container'>

      <QRCode value={qrcode} />

      <input
        className='input'
        placeholder='Digite seu link aqui...'
        value={qrcode}
        onChange={() => handleQrcode(event)}
      />

      <a href={qrcodeLink} download={`qrcode.png`}>Baixar QRCode</a>

    </div>
  )
}

export default App
