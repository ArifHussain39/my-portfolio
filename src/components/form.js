export default function Form() {

    return (
        <div style={formStyle}>
            <h1>Form</h1>
            <form >
                <div>
                    <label>Name</label>
                    <input type="text" style={inputStyle} />
                </div>
                <div>
                    <label>Email</label>
                    <input type="email" style={inputStyle}/>
                </div>
                <div>
                    <label>Message</label>
                    <textarea style={textareaStyle}></textarea>
                </div>
                <button style={buttonStyle}>Submit</button>
            </form>
        </div>
    );
}

const formStyle = {
    padding: '100px 0',
    marginTop: '50px',
    marginBottom: '50px',
    textAlign: 'center',
    background: '#f4f4f4',
    
}
const inputStyle = {
    padding: '10px',
    border: 'none',
    borderBottom: '2px solid #ccc',
    width: '100%',
    marginBottom: '20px',
    fontSize: '16px',
    fontFamily: 'sans-serif'
};

const textareaStyle = {
    padding: '10px',
    border: 'none',
    borderBottom: '2px solid #ccc',
    width: '100%',
    marginBottom: '20px',
    fontSize: '16px',
    fontFamily: 'sans-serif'
};


const buttonStyle = {
    backgroundColor: '#4CAF50',
    border: 'none',
    color: 'white',
    padding: '15px 32px',
    textAlign: 'center',
    textDecoration: 'none',
    display: 'inline-block',
    fontSize: '16px',
    margin: '4px 2px',
    cursor: 'pointer'
};

