/* eslint no-magic-numbers: "off" */
export default function read() {
    return new Promise((resolve) => {
      // Эмуляция чтения файла
      setTimeout(() => {
        const data = '{"id":9,"created":1546300800,"userInfo":{"id":1,"name":"Hitman","level":10,"points":2000}}';
        return (input => {
          const buffer = new ArrayBuffer(input.length * 2),
           bufferView = new Uint16Array(buffer);
          for (let ind = 0; ind < input.length; ind+1) {
            bufferView[ind] = input.charCodeAt(ind);
          }
          resolve(buffer);
        })(data);
      }, 1000); 
    });
  }
  