import React from 'react';
import { Doughnut, Bar } from 'react-chartjs-2';
import '../styles/StatusPage.css';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
} from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement);

// Example status data (this would come from the backend in a real application)
const mockUserData = {
  name: "John Doe",
  profilePicture: "https://via.placeholder.com/150",
  lastLogin: "2024-09-25T14:48:00.000Z",
  subscription: {
    paidAmount: 50, // amount paid in dollars
    paymentDate: "2024-09-10T10:30:00.000Z",
    expiryDate: "2025-09-10T10:30:00.000Z",
  },
  selectedModels: [
    { name: "Model 1", img: "https://via.placeholder.com/100" },
    { name: "Model 2", img: "https://via.placeholder.com/100" },
  ],
};

const UserStatusPage = () => {
  // Doughnut chart data (for subscription status)
  const doughnutData = {
    labels: ['Paid', 'Pending', 'Overdue'],
    datasets: [
      {
        data: [50, 25, 25], // Adjust these values based on actual data
        backgroundColor: ['#28a745', '#f8c146', '#dc3545'], // Green for paid, Yellow for pending, Red for overdue
        hoverBackgroundColor: ['#218838', '#e0a800', '#c82333'],
        borderWidth: 1,
      },
    ],
  };

  // Bar chart data (for selected models)
  const barData = {
    labels: mockUserData.selectedModels.map((model) => model.name),
    datasets: [
      {
        label: 'Selected Models',
        data: [5, 3], // Mock data for model interactions
        backgroundColor: ['#007bff', '#17a2b8'], // Blue, Teal
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="status-page">
      <div className="status-card">
        <div className="profile">
          <img src={mockUserData.profilePicture} alt="User Avatar" />
          <h3>{mockUserData.name}</h3>
        </div>

        <h4>Account Information</h4>
        <ul>
          <li><strong>Last Login:</strong> <span>10:30 AM, Sept 27, 2024</span></li>
          <li><strong>Subscription Paid:</strong> <span>Sept 1, 2024</span></li>
          <li><strong>Subscription Expires:</strong> <span>Sept 30, 2025</span></li>
          <li><strong>Amount Paid:</strong> <span>${mockUserData.subscription.paidAmount}</span></li>
        </ul>

        <h4>Selected Models</h4>
        <div className="models">
          {mockUserData.selectedModels.map((model, index) => (
            <div key={index}>
              <img src={model.img} alt={model.name} />
              <p>{model.name}</p>
            </div>
          ))}
        </div>

        <div className="chart-section">
          <div className="chart-container">
            <h4>Subscription Status</h4>
            <Doughnut data={doughnutData} options={{ maintainAspectRatio: false }} />
          </div>

          <div className="chart-container">
            <h4>Selected Models Interaction</h4>
            <Bar data={barData} options={{ maintainAspectRatio: false }} />
          </div>
        </div>

        <div className="support">
          <p>If you need help, please <a href="#contact">contact support</a>.</p>
        </div>
      </div>
    </div>
  );
};

export default UserStatusPage;
