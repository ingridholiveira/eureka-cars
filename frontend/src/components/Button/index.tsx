import "./styles.css";

const Button = () => {
  // interface Props {
  //   header: string;
  //   body: string;
  //   modalType: 'confirm' | 'success';
  //   onClose: () => void;
  //   isOpen: boolean;
  //   actions: {
  //     label: string;
  //     type: 'primary' | 'secondary';
  //     action: () => void;
  //   }[];
  // }

  return (
    <>
      <button className="btn btn-secondary btn-icon">
        <p>VER CATÁLOGO</p>
      </button>
    </>
  );
};

export default Button;
