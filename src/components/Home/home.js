import React, { useState } from "react"; 
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from "../Auth/login";
import Signup from "../Auth/signup";
import Confirm from "../Auth/comfirm";
import HomePage from "../HomePage/homePage";
import BookDetail from "../BookDetail/bookDetail";
import LoanForm from "../loan/loanForm";
import Request from "../loan/request";
import AllLoan from "../loan/allLoan";
import Dashboard from "../admin/page/page";
import Overview from "../admin/overview/overview";
import UserManagement from "../admin/userManagement/userManagement";
import ProductManagement from "../admin/bookManagament/productManagement";
import LoanManagement from "../admin/sell/loanManagement";
import ProductCreate from "../admin/bookManagament/productCreate";
import SearchByCategory from "../searchByCategory/mainPage";

// Component bảo vệ Route
function ProtectedRoute({ isAuthenticated, children }) {
    return isAuthenticated ? children : <Navigate to="/login" replace />;
}

export default function Home() {
    // Lấy trạng thái từ localStorage (mặc định là false nếu chưa có giá trị)
    const [isAuthenticated, setIsAuthenticated] = useState(() => {
        return JSON.parse(localStorage.getItem("isAuthenticated")) || false;
    });

    // Hàm để cập nhật trạng thái xác thực và lưu vào localStorage
    const handleAuthentication = (value) => {
        setIsAuthenticated(value);
        localStorage.setItem("isAuthenticated", JSON.stringify(value));
    };

    return (
        <Router>
            <div className="main-body">
                <Routes>
                    <Route
                        path="/"
                        element={
                            <HomePage
                                isAuthenticated={isAuthenticated}
                                setIsAuthenticated={handleAuthentication}
                            />
                        }
                    />
                    <Route
                        path="/login"
                        element={<Login setIsAuthenticated={handleAuthentication} />}
                    />
                    <Route
                        path="/signup"
                        element={<Signup setIsAuthenticated={handleAuthentication} />}
                    />
                    <Route
                        path="/confirm"
                        element={<Confirm/>}
                    />
                    <Route path="/detail-book" element={<BookDetail />} />
                    <Route
                        path="/form-loan"
                        element={
                            <ProtectedRoute isAuthenticated={isAuthenticated}>
                                <LoanForm
                                    isAuthenticated={isAuthenticated}
                                    setIsAuthenticated={handleAuthentication}
                                />
                            </ProtectedRoute>
                        }
                    />
                    <Route
                        path="/request"
                        element={
                            <ProtectedRoute isAuthenticated={isAuthenticated}>
                                <Request
                                    isAuthenticated={isAuthenticated}
                                    setIsAuthenticated={handleAuthentication}
                                />
                            </ProtectedRoute>
                        }
                    />
                    <Route
                        path="/all-Loan"
                        element={
                            <ProtectedRoute isAuthenticated={isAuthenticated}>
                                <AllLoan
                                    isAuthenticated={isAuthenticated}
                                    setIsAuthenticated={handleAuthentication}
                                />
                            </ProtectedRoute>
                        }
                    />
                    <Route
                        path="/admin/*"
                        element={
                            <ProtectedRoute isAuthenticated={isAuthenticated}>
                                <Dashboard
                                    isAuthenticated={isAuthenticated}
                                    setIsAuthenticated={handleAuthentication}
                                />
                            </ProtectedRoute>
                        }
                    >
                        <Route path="overview" element={<Overview />} />
                        <Route path="user-management" element={<UserManagement />} />
                        <Route path="product-management" element={<ProductManagement />} />
                        <Route path="order-management" element={<LoanManagement />} />
                        <Route path="product-management/create" element={<ProductCreate />} />
                    </Route>
                    <Route
                        path="/search"
                        element={
                            <SearchByCategory
                                isAuthenticated={isAuthenticated}
                                setIsAuthenticated={handleAuthentication}
                            />
                        }
                    />
                </Routes>
            </div>
        </Router>
    );
}
