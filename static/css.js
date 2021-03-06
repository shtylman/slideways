module.exports = [
  '.slideways {',
    'position: relative;',
    'left: 0px;',
    'top: 0px;',
    'display: inline-block;',
    'height: 24px;',
    'width: 150px;',
  '}',
  '.slideways .turtle {',
    'position: absolute;',
    'top: 0px;',
    'left: 0px;',
    'bottom: 0px;',
    'width: 8px;',
    'margin-top: 0px;',
    'margin-bottom: 0px;',
    'background-color: white;',
    'border: 2px solid rgb(52,52,52);',
    'border-radius: 4px;',
  '}',
  '.slideways .turtle.pressed {',
    'background-color: rgb(223,223,223);',
  '}',
  '.slideways .runner {',
    'position: absolute;',
    'top: 8px;',
    'left: 4px;',
    'right: 4px;',
    'height: 5px;',
    'background-color: rgb(96,96,96);',
    'border: 2px solid rgb(52,52,52);',
    'border-radius: 3px;',
  '}'
].join('\n')
