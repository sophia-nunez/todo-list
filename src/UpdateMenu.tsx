
type Props = {
  x: number;
  y: number;
  openEdit: () => void;
};

function UpdateMenu( { x, y, openEdit } : Props) {
    return (
        <div
            style={{
            position: 'absolute',
            top: y,
            left: x,
            background: 'white',
            border: '1px solid #ccc',
            padding: '8px',
            zIndex: 1000,}}>
            <button style={{backgroundColor:'white'}}>Delete</button>
            <br />
            <button style={{backgroundColor:'white', paddingLeft: '1em', paddingRight: '1em'}} onClick={openEdit}>Edit</button>
        </div>
    )
}

export default UpdateMenu;