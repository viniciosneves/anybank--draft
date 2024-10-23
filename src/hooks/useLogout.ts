import { useSetRecoilState } from 'recoil';
import { userAtom } from '../recoil/atoms/userAtom';
import { useNavigate } from 'react-router-dom';

export const useLogout = () => {
  const setUser = useSetRecoilState(userAtom);
  const navigate = useNavigate();

  const logout = () => {
    setUser(null);
    navigate('/auth/login');
  };

  return { logout };
};