const display = document.getElementById('display');
    function appendValue(value) {
      display.value += value;
    }
    function clearAll() {
      display.value = '';
    }
    function clearEntry() {
      display.value = display.value.slice(0, -1);
    }
    function applyPercentage() {
      const value = display.value;
      const match = value.match(/(\d+(\.\d+)?)$/);
      if (match) {
        const number = parseFloat(match[0]);
        const percent = number / 100;
        display.value = value.slice(0, -match[0].length) + percent;
      }
    }
    function calculate() {
      try {
        display.value = eval(display.value);
      } catch {
        display.value = 'Error';
      }
    }