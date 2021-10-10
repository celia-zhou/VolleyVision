import React from 'react'
import styled from 'styled-components'

const upload = styled.button`
  left: 0;
  top: 0;
  bottom: 0;
  padding: 15px 25px;
  font-size: 24px;
  text-align: center;
  cursor: pointer;
  outline: none;
  color: #fff;
  background-color: #04AA6D;
  border: none;
  border-radius: 15px;
  box-shadow: 0 9px #999;
}

.button:hover {background-color: #3e8e41}

.button:active {
  background-color: #3e8e41;
  box-shadow: 0 5px #666;
  transform: translateY(4px);
}
`

const UploadButton = () => {
  return (
    <div>
      <button class="button">Upload</button>
    </div>
  );
}

export default UploadButton
/* <head>
<meta name="viewport" content="width=device-width, initial-scale=1">

</head>
<body>

<h2>Animated Buttons - "Pressed Effect"</h2>

<button class="button">Click Me</button>

</body> */
