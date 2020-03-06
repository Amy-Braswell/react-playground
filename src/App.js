import React from 'react';
import AddItemForm from './01_Props/shopping-list/AddItemForm';
import ShoppingList from './01_Props/shopping-list/ShoppingList';

class App extends React.Component {
  state = {
    shoppingItems: [
      /* put stub items in here for testing */
      { name: 'apples', checked: false },
      { name: 'oranges', checked: true },
      { name: 'bread', checked: false },
    ]
  };

  handleDeleteItem = (item) => {
    const newItems = this.state.shoppingItems.filter(itm => itm !== item)
    this.setState({
      shoppingItems: newItems
    })
  }

  handleCheckItem = (item) => {
    const newItems = this.state.shoppingItems.map(itm => {
      if (itm === item) {
        itm.checked = !itm.checked
      }
      return itm
    })
    this.setState({
      shoppingItems: newItems
    })
  }

  handleAddItem = (itemName, itemToAdd) => {
    const newItems =[
      ...this.state.shoppingItems,
      { name: itemName, checked: false }
    ]

    this.setState({
      shoppingItems: newItems
    })

  }

  render() {
    return (
      <>
        <header>
          <h1>Shopping List</h1>
        </header>
        <main>
          <section>
            <AddItemForm 
              onAddItem={this.handleAddItem}
            />
          </section>
          <section>
            <ShoppingList
              //items is an empty array as set in <ShoppingList /> until state is updated here 
              items={this.state.shoppingItems} 
              // calling handleDeleteItem()
              onDeleteItem={this.handleDeleteItem}
              // calling handleCheckItem()
              onCheckItem={this.handleCheckItem}
              />
          </section>
        </main>
      </>
    )
  }
}

export default App;





/* -----------PREVIOUS IMPORTS---------------- 
//import './App.css';
//import Messages from './Messages';
//import TheDate from './state/TheDate';
//import Counter from './state/Counter';
//import Tabs from './state/Tabs';
//import Accordion from './state-drills/Accordion';

/*   ------------TABS EXAMPLE -----------------
const tabsProp = [
  { name: 'First tab',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam exercitationem quos consectetur expedita consequatur. Fugit, sapiente aspernatur corporis velit, dolor eum reprehenderit provident ipsam, maiores incidunt repellat! Facilis, neque doloremque.' },
  { name: 'Second tab',
    content: 'Laboriosam exercitationem quos consectetur expedita consequatur. Fugit, sapiente aspernatur corporis velit, dolor eum reprehenderit provident ipsam, maiores incidunt repellat! Facilis, neque doloremque. Lorem ipsum dolor sit amet consectetur adipisicing elit.' },
  { name: 'Third tab',
    content: 'Fugit, sapiente aspernatur corporis velit, dolor eum reprehenderit provident ipsam, maiores incidunt repellat! Facilis, neque doloremque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam exercitationem quos consectetur expedita consequatur.' },
];

export default class App extends Component {
  render() {
    return <div>
      <Tabs tabs={tabsProp} />
    </div>
  }
}

*/

/*  
  ------MESSAGES, DATE, AND COUNTER------- 
export default class App extends Component {
  render () {
    return (
    <div className='App'>
        <h1>YOUR APPLICATION NAME</h1>
        <Messages name="Messages" unread={0}/>
        <Messages name="Notifications" unread={10}/>
        <TheDate />
        <Counter count={123} />
    </div>
    );
  }
}
*/

/* 
 ------------ACCORDION EXAMPLE-----------------
 const sections = [
  {
    title: 'Section 1',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  },
  {
    title: 'Section 2',
    content: 'Cupiditate tenetur aliquam necessitatibus id distinctio quas nihil ipsam nisi modi!',
  },
  {
    title: 'Section 3',
    content: 'Animi amet cumque sint cupiditate officia ab voluptatibus libero optio et?',
  },
]


export default class App extends Component {
  render() {
    return <div>
      <Accordion sections={sections} />
    </div>
  }
}

*/



