/**
 * Data Transfer Object (DTO)
 * 
 * Used when we need to transfer a certain object for another layer
 */

export interface ICreateUserRequestDTO {
  name: string;
  email: string;
  password: string;
}