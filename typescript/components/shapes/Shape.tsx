
type ShapeType = 'rectangle' | 'triangle' | 'cube' | 'square';
type TwoDShapeType = Exclude<ShapeType, 'cube'>;

type themeType = "light" | "dark";
type colorType = "red" | "yellow" | "purple" | "pink";

type ItemProps = {
    // color: `${themeType}-${colorType}`    //combined Type
    color: Exclude<`${themeType}-${colorType}`,"dark-yellow">
}


const Shape = (props: ItemProps) => {
    const shape : ShapeType = "cube";
    const twoDShape: TwoDShapeType = 'triangle'; 

  return (
    <div > 
        Shape
    </div>
  )
}

export default Shape
