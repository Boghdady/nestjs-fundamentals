import { Exclude, Expose } from 'class-transformer';

export class UserResponseDto {
  id: string;
  username: string;
  email: string;

  @Expose({ name: 'Country' })
  country: string;

  // @Expose({ name: 'Address' })
  // getCountry(): string {
  //   return this.country;
  // }

  @Exclude()
  password: string;

  constructor(partial: Partial<UserResponseDto>) {
    Object.assign(this, partial);
  }
}
