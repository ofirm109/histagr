function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6DGqrRydinS":
        Script1();
        break;
      case "5urksEEFTfV":
        Script2();
        break;
  }
}

function Script1()
{
  const isScriptAlreadyIncluded = (src) => document.querySelector(`script[src="${src}"]`) !== null;
const loadScript = (src) => {
  if (!isScriptAlreadyIncluded(src)) {
    const script = document.createElement('script');
    script.src = src;
    script.async = true;
    document.head.appendChild(script);
  }
};
const nrzTextArea = 'https://cdn.jsdelivr.net/gh/nrzmalik/nrzTextArea@latest/nrzTextAreaSL.js';
loadScript(nrzTextArea);
 
}

function Script2()
{
  reateInput('Object_ALT_Text', 'SL_Varaible_Name', {
    backgroundColor: 'white',
    textColor: 'black',
    border: '1px solid darkblue',
    fontSize: '15px',
    defaultValue: ''
});
}

