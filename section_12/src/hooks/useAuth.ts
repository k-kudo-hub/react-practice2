import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

import { User } from '../types/api/user';
import { useMessage } from './useMessage';

export const useAuth = () => {
  const navigate = useNavigate();
  const { showMessage } = useMessage();
  const [loading, setLoading] = useState(false);

  const Login = useCallback((id: string) => {
    setLoading(true);

    axios
      .get<User>(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => {
        if(res.data) {
          showMessage({title: "Login successfully.", status: "success"});
          navigate("/");
        } else {
          showMessage({title: "User not found", status: "error"});
        }
      })
      .catch(() => showMessage({title: "Authentication failed", status: "error"}))
      .finally(() => setLoading(false));
  },
  [navigate, showMessage]
  );
  return { Login, loading }
};
