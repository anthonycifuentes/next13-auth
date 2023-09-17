
## Next.js 13 Authentication

This Next.js 13 project demonstrates how to implement authentication using JSON Web Tokens (JWTs).

**Project structure:**

```
app/
  (protected)
    dashboard
      page.js
    settings
      page.js
    layout.js
  api
    login
      route.js
    me
      route.js
  provider
    auth-provider.js
  services
    me.js
  layout.js
  page.js

```

**Main files:**

-   **auth-provider.js:**  This file provides a context for managing the user's authentication state. It uses the  `getMe`  service to fetch the current user from the API.
-   **api/login/route.js:**  This file exposes an API endpoint for logging in users. It verifies the user's credentials and generates a JWT token if the login is successful.
-   **api/me/route.js:**  This file exposes an API endpoint for fetching the current user's information. It verifies the user's JWT token before returning the user's information.

**Usage:**

To use authentication in your Next.js 13 project, you can wrap your app in the `AuthProvider` component. This will provide the `useAuth` hook to your components, which can be used to check the user's authentication state and get the current user's information.

For example, the following component would only be rendered if the user is logged in:

```js
import { useAuth } from "../provider/auth-provider";

const ProtectedComponent = () => {
  const { user } = useAuth();

  if (!user) {
    return <div>Please log in</div>;
  }

  return <div>Welcome, {user.username}</div>;
};

export default ProtectedComponent;

```

**To log in a user:**

You can use the following code to log in a user:

```js
import { useRouter } from "next/navigation";

const login = async () => {
  const router = useRouter();

  const response = await fetch("/api/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: "admin",
      password: "admin",
    }),
  });

  if (response.status === 200) {
    router.push("/protected");
  } else {
    // handle error
  }
};

```

**To log out a user:**

You can use the following code to log out a user:

```js
import { useRouter } from "next/navigation";

const logout = () => {
  const router = useRouter();

  document.cookie = "token=";
  router.push("/");
};

```

This is a basic example of how to implement authentication in Next.js 13 using JWTs. You can customize the implementation to meet the specific needs of your project.
