import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function BakeryDashboard() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('products');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  
  // Check screen size
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);
  
  // Sample data
  const [products, setProducts] = useState([
    { id: 1, name: 'Sourdough Bread', price: 5.99, category: 'Bread', stock: 45 },
    { id: 2, name: 'Croissant', price: 3.50, category: 'Pastry', stock: 120 },
    { id: 3, name: 'Chocolate Cake', price: 24.99, category: 'Cake', stock: 8 },
    { id: 4, name: 'Baguette', price: 4.50, category: 'Bread', stock: 60 }
  ]);
  
  const [inventory, setInventory] = useState([
    { id: 1, item: 'Flour', quantity: 50, unit: 'kg', minStock: 20 },
    { id: 2, item: 'Sugar', quantity: 30, unit: 'kg', minStock: 15 },
    { id: 3, item: 'Butter', quantity: 10, unit: 'kg', minStock: 8 },
    { id: 4, item: 'Eggs', quantity: 200, unit: 'pcs', minStock: 100 },
    { id: 5, item: 'Yeast', quantity: 5, unit: 'kg', minStock: 3 }
  ]);
  
  const [orders, setOrders] = useState([
    { id: 1, customer: 'John Doe', items: 'Sourdough x2, Croissant x5', total: 29.48, status: 'Pending', date: '2026-01-07' },
    { id: 2, customer: 'Jane Smith', items: 'Chocolate Cake x1', total: 24.99, status: 'Completed', date: '2026-01-06' },
    { id: 3, customer: 'Bob Wilson', items: 'Croissant x10', total: 35.00, status: 'In Progress', date: '2026-01-07' },
    { id: 4, customer: 'Alice Johnson', items: 'Baguette x5, Sourdough x1', total: 28.49, status: 'Pending', date: '2026-01-07' }
  ]);
  
  const [schedule, setSchedule] = useState([
    { id: 1, product: 'Sourdough Bread', quantity: 50, date: '2026-01-08', time: '05:00', status: 'Scheduled' },
    { id: 2, product: 'Croissant', quantity: 100, date: '2026-01-08', time: '06:00', status: 'Scheduled' },
    { id: 3, product: 'Chocolate Cake', quantity: 5, date: '2026-01-09', time: '08:00', status: 'Scheduled' },
    { id: 4, product: 'Baguette', quantity: 80, date: '2026-01-08', time: '07:00', status: 'In Progress' }
  ]);

  const styles = {
    container: {
      display: 'flex',
      height: '100vh',
      width: '100vw',
      position: 'fixed',
      top: 0,
      left: 0,
      fontFamily: 'Arial, sans-serif',
      backgroundColor: '#f4f7fa',
      overflow: 'hidden'
    },
    sidebar: {
      width: isMobile ? (sidebarOpen ? '250px' : '0') : '250px',
      backgroundColor: '#2c3e50',
      color: 'white',
      transition: 'width 0.3s ease, transform 0.3s ease',
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column',
      position: isMobile ? 'fixed' : 'relative',
      height: '100vh',
      zIndex: 1000,
      transform: isMobile && !sidebarOpen ? 'translateX(-100%)' : 'translateX(0)',
      left: 0,
      top: 0
    },
    sidebarOverlay: {
      display: isMobile && sidebarOpen ? 'block' : 'none',
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0,0,0,0.5)',
      zIndex: 999
    },
    sidebarHeader: {
      padding: '20px',
      backgroundColor: '#1a252f',
      borderBottom: '1px solid #34495e',
      display: 'flex',
      alignItems: 'center',
      gap: '10px'
    },
    logo: {
      fontSize: '24px'
    },
    brandName: {
      fontSize: '18px',
      fontWeight: 'bold',
      margin: 0,
      whiteSpace: 'nowrap'
    },
    menu: {
      listStyle: 'none',
      padding: 0,
      margin: 0,
      flex: 1,
      display: 'flex',
      flexDirection: 'column'
    },
    menuItems: {
      flex: 1
    },
    menuItem: {
      padding: '15px 20px',
      cursor: 'pointer',
      transition: 'background-color 0.3s',
      borderLeft: '3px solid transparent',
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
      whiteSpace: 'nowrap'
    },
    activeMenuItem: {
      padding: '15px 20px',
      cursor: 'pointer',
      backgroundColor: '#34495e',
      borderLeft: '3px solid #e67e22',
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
      whiteSpace: 'nowrap'
    },
    leaveButton: {
      padding: '15px 20px',
      margin: '20px',
      backgroundColor: '#e74c3c',
      color: 'white',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      fontSize: '14px',
      fontWeight: '600',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '10px',
      transition: 'background-color 0.3s',
      whiteSpace: 'nowrap'
    },
    mainContent: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      overflow: 'hidden',
      width: '100%'
    },
    topbar: {
      backgroundColor: 'white',
      padding: '15px 20px',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      flexWrap: 'wrap',
      gap: '10px'
    },
    hamburger: {
      background: 'none',
      border: 'none',
      fontSize: '24px',
      cursor: 'pointer',
      color: '#2c3e50',
      padding: '5px 10px',
      display: isMobile ? 'block' : 'none'
    },
    userSection: {
      display: 'flex',
      alignItems: 'center',
      gap: '15px',
      marginLeft: isMobile ? '0' : 'auto'
    },
    userName: {
      color: '#7f8c8d',
      display: isMobile ? 'none' : 'block'
    },
    userAvatar: {
      width: '40px',
      height: '40px',
      borderRadius: '50%',
      backgroundColor: '#e67e22',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'white',
      fontWeight: 'bold'
    },
    contentArea: {
      flex: 1,
      padding: isMobile ? '15px' : '30px',
      overflow: 'auto',
      backgroundColor: '#f4f7fa'
    },
    card: {
      backgroundColor: 'white',
      borderRadius: '8px',
      padding: isMobile ? '15px' : '25px',
      boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
      marginBottom: '20px'
    },
    cardHeader: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: '20px',
      flexWrap: 'wrap',
      gap: '10px'
    },
    title: {
      margin: 0,
      color: '#2c3e50',
      fontSize: isMobile ? '20px' : '24px'
    },
    button: {
      padding: '10px 20px',
      backgroundColor: '#e67e22',
      color: 'white',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      fontSize: '14px',
      fontWeight: '500',
      transition: 'background-color 0.3s',
      whiteSpace: 'nowrap'
    },
    tableContainer: {
      overflowX: 'auto',
      width: '100%'
    },
    table: {
      width: '100%',
      borderCollapse: 'collapse',
      minWidth: isMobile ? '600px' : 'auto'
    },
    th: {
      backgroundColor: '#ecf0f1',
      padding: isMobile ? '10px 8px' : '12px',
      textAlign: 'left',
      borderBottom: '2px solid #bdc3c7',
      fontWeight: '600',
      color: '#2c3e50',
      fontSize: isMobile ? '12px' : '14px',
      whiteSpace: 'nowrap'
    },
    td: {
      padding: isMobile ? '10px 8px' : '12px',
      borderBottom: '1px solid #ecf0f1',
      fontSize: isMobile ? '12px' : '14px',
      color: '#34495e'
    },
    statusBadge: {
      padding: '5px 12px',
      borderRadius: '12px',
      fontSize: isMobile ? '11px' : '12px',
      fontWeight: '600',
      display: 'inline-block',
      whiteSpace: 'nowrap'
    },
    actionButton: {
      padding: isMobile ? '5px 10px' : '6px 12px',
      backgroundColor: '#3498db',
      color: 'white',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
      fontSize: isMobile ? '11px' : '12px',
      marginRight: '5px',
      marginBottom: '5px',
      whiteSpace: 'nowrap'
    },
    deleteButton: {
      padding: isMobile ? '5px 10px' : '6px 12px',
      backgroundColor: '#e74c3c',
      color: 'white',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
      fontSize: isMobile ? '11px' : '12px',
      whiteSpace: 'nowrap'
    },
    statsContainer: {
      display: 'grid',
      gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(200px, 1fr))',
      gap: isMobile ? '15px' : '20px',
      marginBottom: '20px'
    },
    statCard: {
      backgroundColor: 'white',
      padding: isMobile ? '15px' : '20px',
      borderRadius: '8px',
      boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
      borderLeft: '4px solid #e67e22'
    },
    statValue: {
      fontSize: isMobile ? '24px' : '28px',
      fontWeight: 'bold',
      color: '#2c3e50',
      margin: '10px 0'
    },
    statLabel: {
      fontSize: isMobile ? '13px' : '14px',
      color: '#7f8c8d'
    }
  };

  const getStatusColor = (status) => {
    const colors = {
      'Pending': '#f39c12',
      'Completed': '#27ae60',
      'In Progress': '#3498db',
      'Scheduled': '#9b59b6',
      'Low Stock': '#e74c3c',
      'In Stock': '#27ae60'
    };
    return colors[status] || '#95a5a6';
  };

  const handleMenuClick = (tab) => {
    setActiveTab(tab);
    if (isMobile) {
      setSidebarOpen(false);
    }
  };

  const renderProducts = () => (
    <div>
      <div style={styles.statsContainer}>
        <div style={{...styles.statCard, borderLeftColor: '#3498db'}}>
          <div style={styles.statLabel}>Total Products</div>
          <div style={styles.statValue}>{products.length}</div>
        </div>
        <div style={{...styles.statCard, borderLeftColor: '#e67e22'}}>
          <div style={styles.statLabel}>Low Stock Products</div>
          <div style={styles.statValue}>{products.filter(p => p.stock < 20).length}</div>
        </div>
        <div style={{...styles.statCard, borderLeftColor: '#27ae60'}}>
          <div style={styles.statLabel}>Total Value</div>
          <div style={styles.statValue}>${products.reduce((sum, p) => sum + (p.price * p.stock), 0).toFixed(2)}</div>
        </div>
      </div>
      <div style={styles.card}>
        <div style={styles.cardHeader}>
          <h2 style={styles.title}>Products Management</h2>
          <button style={styles.button} onClick={() => alert('Add Product functionality')}>
            + Add Product
          </button>
        </div>
        <div style={styles.tableContainer}>
          <table style={styles.table}>
            <thead>
              <tr>
                <th style={styles.th}>ID</th>
                <th style={styles.th}>Name</th>
                <th style={styles.th}>Price</th>
                <th style={styles.th}>Category</th>
                <th style={styles.th}>Stock</th>
                <th style={styles.th}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {products.map(product => (
                <tr key={product.id}>
                  <td style={styles.td}>{product.id}</td>
                  <td style={styles.td}>{product.name}</td>
                  <td style={styles.td}>${product.price}</td>
                  <td style={styles.td}>{product.category}</td>
                  <td style={styles.td}>
                    <span style={{
                      ...styles.statusBadge,
                      backgroundColor: product.stock < 20 ? '#e74c3c' : '#27ae60',
                      color: 'white'
                    }}>
                      {product.stock}
                    </span>
                  </td>
                  <td style={styles.td}>
                    <button style={styles.actionButton}>Edit</button>
                    <button style={styles.deleteButton}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  const renderInventory = () => (
    <div>
      <div style={styles.statsContainer}>
        <div style={{...styles.statCard, borderLeftColor: '#27ae60'}}>
          <div style={styles.statLabel}>Total Items</div>
          <div style={styles.statValue}>{inventory.length}</div>
        </div>
        <div style={{...styles.statCard, borderLeftColor: '#e74c3c'}}>
          <div style={styles.statLabel}>Low Stock Items</div>
          <div style={styles.statValue}>{inventory.filter(i => i.quantity <= i.minStock).length}</div>
        </div>
        <div style={{...styles.statCard, borderLeftColor: '#3498db'}}>
          <div style={styles.statLabel}>Reorder Needed</div>
          <div style={styles.statValue}>{inventory.filter(i => i.quantity < i.minStock).length}</div>
        </div>
      </div>
      <div style={styles.card}>
        <div style={styles.cardHeader}>
          <h2 style={styles.title}>Inventory Management</h2>
          <button style={styles.button} onClick={() => alert('Add Inventory Item')}>
            + Add Item
          </button>
        </div>
        <div style={styles.tableContainer}>
          <table style={styles.table}>
            <thead>
              <tr>
                <th style={styles.th}>ID</th>
                <th style={styles.th}>Item</th>
                <th style={styles.th}>Quantity</th>
                <th style={styles.th}>Unit</th>
                <th style={styles.th}>Min Stock</th>
                <th style={styles.th}>Status</th>
                <th style={styles.th}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {inventory.map(item => (
                <tr key={item.id}>
                  <td style={styles.td}>{item.id}</td>
                  <td style={styles.td}>{item.item}</td>
                  <td style={styles.td}>{item.quantity}</td>
                  <td style={styles.td}>{item.unit}</td>
                  <td style={styles.td}>{item.minStock}</td>
                  <td style={styles.td}>
                    <span style={{
                      ...styles.statusBadge,
                      backgroundColor: getStatusColor(item.quantity <= item.minStock ? 'Low Stock' : 'In Stock'),
                      color: 'white'
                    }}>
                      {item.quantity <= item.minStock ? 'Low Stock' : 'In Stock'}
                    </span>
                  </td>
                  <td style={styles.td}>
                    <button style={styles.actionButton}>Update</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  const renderOrders = () => (
    <div>
      <div style={styles.statsContainer}>
        <div style={{...styles.statCard, borderLeftColor: '#f39c12'}}>
          <div style={styles.statLabel}>Pending Orders</div>
          <div style={styles.statValue}>{orders.filter(o => o.status === 'Pending').length}</div>
        </div>
        <div style={{...styles.statCard, borderLeftColor: '#3498db'}}>
          <div style={styles.statLabel}>In Progress</div>
          <div style={styles.statValue}>{orders.filter(o => o.status === 'In Progress').length}</div>
        </div>
        <div style={{...styles.statCard, borderLeftColor: '#27ae60'}}>
          <div style={styles.statLabel}>Completed</div>
          <div style={styles.statValue}>{orders.filter(o => o.status === 'Completed').length}</div>
        </div>
        <div style={{...styles.statCard, borderLeftColor: '#9b59b6'}}>
          <div style={styles.statLabel}>Total Revenue</div>
          <div style={styles.statValue}>${orders.reduce((sum, o) => sum + o.total, 0).toFixed(2)}</div>
        </div>
      </div>
      <div style={styles.card}>
        <div style={styles.cardHeader}>
          <h2 style={styles.title}>Orders Management</h2>
          <button style={styles.button} onClick={() => alert('New Order')}>
            + New Order
          </button>
        </div>
        <div style={styles.tableContainer}>
          <table style={styles.table}>
            <thead>
              <tr>
                <th style={styles.th}>Order ID</th>
                <th style={styles.th}>Customer</th>
                <th style={styles.th}>Items</th>
                <th style={styles.th}>Total</th>
                <th style={styles.th}>Date</th>
                <th style={styles.th}>Status</th>
                <th style={styles.th}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {orders.map(order => (
                <tr key={order.id}>
                  <td style={styles.td}>#{order.id}</td>
                  <td style={styles.td}>{order.customer}</td>
                  <td style={styles.td}>{order.items}</td>
                  <td style={styles.td}>${order.total}</td>
                  <td style={styles.td}>{order.date}</td>
                  <td style={styles.td}>
                    <span style={{
                      ...styles.statusBadge,
                      backgroundColor: getStatusColor(order.status),
                      color: 'white'
                    }}>
                      {order.status}
                    </span>
                  </td>
                  <td style={styles.td}>
                    <button style={styles.actionButton}>View</button>
                    <button style={styles.actionButton}>Update</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  const renderSchedule = () => (
    <div>
      <div style={styles.statsContainer}>
        <div style={{...styles.statCard, borderLeftColor: '#9b59b6'}}>
          <div style={styles.statLabel}>Scheduled Today</div>
          <div style={styles.statValue}>{schedule.filter(s => s.date === '2026-01-08').length}</div>
        </div>
        <div style={{...styles.statCard, borderLeftColor: '#3498db'}}>
          <div style={styles.statLabel}>In Progress</div>
          <div style={styles.statValue}>{schedule.filter(s => s.status === 'In Progress').length}</div>
        </div>
        <div style={{...styles.statCard, borderLeftColor: '#27ae60'}}>
          <div style={styles.statLabel}>Total Items</div>
          <div style={styles.statValue}>{schedule.reduce((sum, s) => sum + s.quantity, 0)}</div>
        </div>
      </div>
      <div style={styles.card}>
        <div style={styles.cardHeader}>
          <h2 style={styles.title}>Production Schedule</h2>
          <button style={styles.button} onClick={() => alert('Schedule Production')}>
            + Schedule Production
          </button>
        </div>
        <div style={styles.tableContainer}>
          <table style={styles.table}>
            <thead>
              <tr>
                <th style={styles.th}>ID</th>
                <th style={styles.th}>Product</th>
                <th style={styles.th}>Quantity</th>
                <th style={styles.th}>Date</th>
                <th style={styles.th}>Time</th>
                <th style={styles.th}>Status</th>
                <th style={styles.th}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {schedule.map(item => (
                <tr key={item.id}>
                  <td style={styles.td}>{item.id}</td>
                  <td style={styles.td}>{item.product}</td>
                  <td style={styles.td}>{item.quantity}</td>
                  <td style={styles.td}>{item.date}</td>
                  <td style={styles.td}>{item.time}</td>
                  <td style={styles.td}>
                    <span style={{
                      ...styles.statusBadge,
                      backgroundColor: getStatusColor(item.status),
                      color: 'white'
                    }}>
                      {item.status}
                    </span>
                  </td>
                  <td style={styles.td}>
                    <button style={styles.actionButton}>Edit</button>
                    <button style={{...styles.actionButton, backgroundColor: '#27ae60'}}>Complete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  return (
    <div style={styles.container}>
      {/* Sidebar Overlay for mobile */}
      <div 
        style={styles.sidebarOverlay} 
        onClick={() => setSidebarOpen(false)}
      />
      
      {/* Sidebar - Always visible on desktop, toggleable on mobile */}
      <div style={styles.sidebar}>
        <div style={styles.sidebarHeader}>
          <span style={styles.logo}>🥖</span>
          <h3 style={styles.brandName}>Bakery</h3>
        </div>
        <ul style={styles.menu}>
          <div style={styles.menuItems}>
            <li 
              style={activeTab === 'products' ? styles.activeMenuItem : styles.menuItem}
              onClick={() => handleMenuClick('products')}
            >
              <span>📦</span>
              <span>Products</span>
            </li>
            <li 
              style={activeTab === 'inventory' ? styles.activeMenuItem : styles.menuItem}
              onClick={() => handleMenuClick('inventory')}
            >
              <span>📊</span>
              <span>Inventory</span>
            </li>
            <li 
              style={activeTab === 'orders' ? styles.activeMenuItem : styles.menuItem}
              onClick={() => handleMenuClick('orders')}
            >
              <span>🛒</span>
              <span>Orders</span>
            </li>
            <li 
              style={activeTab === 'schedule' ? styles.activeMenuItem : styles.menuItem}
              onClick={() => handleMenuClick('schedule')}
            >
              <span>📅</span>
              <span>Production Schedule</span>
            </li>
          </div>
          <button 
            style={styles.leaveButton}
            onClick={() => navigate('/')}
          >
            <span>🚪</span>
            <span>Leave Dashboard</span>
          </button>
        </ul>
      </div>

      {/* Main Content */}
      <div style={styles.mainContent}>
        {/* Topbar */}
        <div style={styles.topbar}>
          <button style={styles.hamburger} onClick={() => setSidebarOpen(!sidebarOpen)}>
            ☰
          </button>
          <div style={styles.userSection}>
            <span style={styles.userName}>Welcome back, Admin</span>
            <div style={styles.userAvatar}>A</div>
          </div>
        </div>

        {/* Content Area */}
        <div style={styles.contentArea}>
          {activeTab === 'products' && renderProducts()}
          {activeTab === 'inventory' && renderInventory()}
          {activeTab === 'orders' && renderOrders()}
          {activeTab === 'schedule' && renderSchedule()}
        </div>
      </div>
    </div>
  );
}