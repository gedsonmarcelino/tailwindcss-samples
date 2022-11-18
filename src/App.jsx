import { FaFacebookF, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="flex flex-col items-center justify-center text-left h-full p-5 bg-slate-100;">
      <div>
        <h1 className="text-2xl mb-3 font-medium">Pages:</h1>

        <ul className="list-disc pl-6">
          <li>
            <Link className="text-blue-500 hover:underline" to="/profile">
              Profile
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default App;
