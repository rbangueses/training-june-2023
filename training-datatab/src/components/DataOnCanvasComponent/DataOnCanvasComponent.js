import './DataOnCanvasComponent.css';

class DataOnCanvasComponent extends React.Component {
   
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() { 
    
    const { task } = this.props;  
      return (
        <div key='data-on-canvas-div'>
          <table key='data-on-canvas-table' className='DataOnCanvasTable'>
            <tbody>
            <tr>
              <td>Name: {task.attributes.name}</td>
            </tr>
            <tr>
                <td>Account ID: {task.attributes.accountId}</td>
            </tr>
            <tr>
                <td>Balance: {task.attributes.balance}</td>
            </tr>
            </tbody>
          </table>
          <br></br>    
        </div>  
      )
  }
}

export default DataOnCanvasComponent;