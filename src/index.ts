import { Pixel } from './pixel'

export const hello = (): void => {
  const p: Pixel = {
    colorSet: new Map()
      .set(1, "#fff")
      .set(2, "#000"),
    size: {
      width: 2,
      height: 2
    },
    data: [
      [0, 1],
      [2, 0]
    ]
  }
  console.log(p);
};
