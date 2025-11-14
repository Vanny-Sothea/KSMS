export interface UserPayload {
  userId: string; // Use string for JWT / req.user
  role: "USER" | "ADMIN";
}
