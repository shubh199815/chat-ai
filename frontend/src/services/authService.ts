// frontend/src/services/authService.ts

let accessToken: string | null = null;

export interface LoginResponse {
    accessToken: string;
    user: {
        email: string;
        [key: string]: any;
    };
}

export interface RegisterUserResponse {
    message: string;
    user: {
        id: string;
        email: string;
        [key: string]: any;
    };
}

export const registerUser = async (
    email: string,
    password: string,
): Promise<RegisterUserResponse> => {
    const res = await fetch('http://localhost:5000/api/auth/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
    });

    if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.message || 'Registration failed');
    }

    const data: RegisterUserResponse = await res.json();
    return data;
};

export const loginUser = async (
    email: string,
    password: string,
): Promise<LoginResponse> => {
    const res = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        credentials: 'include', // sends refresh token cookie
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
    });

    if (!res.ok) {
        throw new Error('Login failed');
    }

    const data: LoginResponse = await res.json();
    accessToken = data.accessToken;
    return data;
};

export const getAccessToken = (): string | null => accessToken;

export const refreshAccessToken = async (): Promise<{
    accessToken: string;
}> => {
    const res = await fetch('http://localhost:5000/api/refresh-token', {
        method: 'POST',
        credentials: 'include',
    });

    if (!res.ok) {
        throw new Error('Token refresh failed');
    }

    const data: { accessToken: string } = await res.json();
    accessToken = data.accessToken;
    return data;
};

export const fetchWithAuth = async (
    url: string,
    options: RequestInit = {},
): Promise<Response> => {
    if (!accessToken) {
        await refreshAccessToken();
    }

    const res = await fetch(url, {
        ...options,
        headers: {
            ...(options.headers || {}),
            Authorization: `Bearer ${accessToken}`,
        },
    });

    if (res.status === 401) {
        // Attempt refresh and retry once
        await refreshAccessToken();
        return fetchWithAuth(url, options);
    }

    return res;
};
