type Nullable<T> = T | null;

const text: Nullable<HTMLDivElement> = document.getElementById(
  'text'
) as HTMLDivElement;
const input: Nullable<HTMLInputElement> = document.getElementById(
  'input'
) as HTMLInputElement;

if (!text || !input) {
  throw new Error('нет полей');
}

const data = {
  title: '',
};

Object.defineProperty(data, 'title', {
  set: (value: string) => {
    text.textContent = value;
  },
});

input.addEventListener('keyup', (event: KeyboardEvent) => {
  // TODO:ask how to fix
  // data.title = event.target.value;
});

export default Nullable;
