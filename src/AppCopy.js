import { dynamicBlock, share } from 'helux';

const [obj, setObj] = share({ a: { a1: 1 }, b: 1 });
const changeA1 = () => setObj((draft) => void (draft.a.a1 += 100));

export default function Demo() {
  const User = dynamicBlock((props) => (
    <div style={{ border: '1px solid green', padding: '6px', margin: '6px' }}>
      <div>props.mark: {props.mark || 'no mark'}</div>
      <div>obj.a.a1 {obj.a.a1}</div>
      <div>obj.b {obj.b}</div>
    </div>
  ));

  return (
    <div>
      <h3>updated at {new Date().toLocaleString()}</h3>
      <User />
      <User mark="second user" />
      <button onClick={changeA1}>changeA1</button>
    </div>
  );
}