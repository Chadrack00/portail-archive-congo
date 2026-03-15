
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Session
 * 
 */
export type Session = $Result.DefaultSelection<Prisma.$SessionPayload>
/**
 * Model Account
 * 
 */
export type Account = $Result.DefaultSelection<Prisma.$AccountPayload>
/**
 * Model Verification
 * 
 */
export type Verification = $Result.DefaultSelection<Prisma.$VerificationPayload>
/**
 * Model Signalements
 * 
 */
export type Signalements = $Result.DefaultSelection<Prisma.$SignalementsPayload>
/**
 * Model Patients
 * 
 */
export type Patients = $Result.DefaultSelection<Prisma.$PatientsPayload>
/**
 * Model Medecins
 * 
 */
export type Medecins = $Result.DefaultSelection<Prisma.$MedecinsPayload>
/**
 * Model RendezVous
 * 
 */
export type RendezVous = $Result.DefaultSelection<Prisma.$RendezVousPayload>
/**
 * Model Posts
 * 
 */
export type Posts = $Result.DefaultSelection<Prisma.$PostsPayload>
/**
 * Model Commentaires
 * 
 */
export type Commentaires = $Result.DefaultSelection<Prisma.$CommentairesPayload>
/**
 * Model Consultations
 * 
 */
export type Consultations = $Result.DefaultSelection<Prisma.$ConsultationsPayload>
/**
 * Model Fichiers
 * 
 */
export type Fichiers = $Result.DefaultSelection<Prisma.$FichiersPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const SEXE: {
  M: 'M',
  F: 'F'
};

export type SEXE = (typeof SEXE)[keyof typeof SEXE]


export const StatusRvd: {
  attente: 'attente',
  confirme: 'confirme',
  annule: 'annule',
  termine: 'termine'
};

export type StatusRvd = (typeof StatusRvd)[keyof typeof StatusRvd]

}

export type SEXE = $Enums.SEXE

export const SEXE: typeof $Enums.SEXE

export type StatusRvd = $Enums.StatusRvd

export const StatusRvd: typeof $Enums.StatusRvd

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.session`: Exposes CRUD operations for the **Session** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sessions
    * const sessions = await prisma.session.findMany()
    * ```
    */
  get session(): Prisma.SessionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.account`: Exposes CRUD operations for the **Account** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Accounts
    * const accounts = await prisma.account.findMany()
    * ```
    */
  get account(): Prisma.AccountDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.verification`: Exposes CRUD operations for the **Verification** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Verifications
    * const verifications = await prisma.verification.findMany()
    * ```
    */
  get verification(): Prisma.VerificationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.signalements`: Exposes CRUD operations for the **Signalements** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Signalements
    * const signalements = await prisma.signalements.findMany()
    * ```
    */
  get signalements(): Prisma.SignalementsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.patients`: Exposes CRUD operations for the **Patients** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Patients
    * const patients = await prisma.patients.findMany()
    * ```
    */
  get patients(): Prisma.PatientsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.medecins`: Exposes CRUD operations for the **Medecins** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Medecins
    * const medecins = await prisma.medecins.findMany()
    * ```
    */
  get medecins(): Prisma.MedecinsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.rendezVous`: Exposes CRUD operations for the **RendezVous** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RendezVous
    * const rendezVous = await prisma.rendezVous.findMany()
    * ```
    */
  get rendezVous(): Prisma.RendezVousDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.posts`: Exposes CRUD operations for the **Posts** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Posts
    * const posts = await prisma.posts.findMany()
    * ```
    */
  get posts(): Prisma.PostsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.commentaires`: Exposes CRUD operations for the **Commentaires** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Commentaires
    * const commentaires = await prisma.commentaires.findMany()
    * ```
    */
  get commentaires(): Prisma.CommentairesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.consultations`: Exposes CRUD operations for the **Consultations** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Consultations
    * const consultations = await prisma.consultations.findMany()
    * ```
    */
  get consultations(): Prisma.ConsultationsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.fichiers`: Exposes CRUD operations for the **Fichiers** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Fichiers
    * const fichiers = await prisma.fichiers.findMany()
    * ```
    */
  get fichiers(): Prisma.FichiersDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.4.2
   * Query Engine version: 94a226be1cf2967af2541cca5529f0f7ba866919
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Session: 'Session',
    Account: 'Account',
    Verification: 'Verification',
    Signalements: 'Signalements',
    Patients: 'Patients',
    Medecins: 'Medecins',
    RendezVous: 'RendezVous',
    Posts: 'Posts',
    Commentaires: 'Commentaires',
    Consultations: 'Consultations',
    Fichiers: 'Fichiers'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "session" | "account" | "verification" | "signalements" | "patients" | "medecins" | "rendezVous" | "posts" | "commentaires" | "consultations" | "fichiers"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Session: {
        payload: Prisma.$SessionPayload<ExtArgs>
        fields: Prisma.SessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SessionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SessionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findFirst: {
            args: Prisma.SessionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SessionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findMany: {
            args: Prisma.SessionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          create: {
            args: Prisma.SessionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          createMany: {
            args: Prisma.SessionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SessionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          delete: {
            args: Prisma.SessionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          update: {
            args: Prisma.SessionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          deleteMany: {
            args: Prisma.SessionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SessionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SessionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          upsert: {
            args: Prisma.SessionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          aggregate: {
            args: Prisma.SessionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSession>
          }
          groupBy: {
            args: Prisma.SessionGroupByArgs<ExtArgs>
            result: $Utils.Optional<SessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.SessionCountArgs<ExtArgs>
            result: $Utils.Optional<SessionCountAggregateOutputType> | number
          }
        }
      }
      Account: {
        payload: Prisma.$AccountPayload<ExtArgs>
        fields: Prisma.AccountFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AccountFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AccountFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          findFirst: {
            args: Prisma.AccountFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AccountFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          findMany: {
            args: Prisma.AccountFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          create: {
            args: Prisma.AccountCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          createMany: {
            args: Prisma.AccountCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AccountCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          delete: {
            args: Prisma.AccountDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          update: {
            args: Prisma.AccountUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          deleteMany: {
            args: Prisma.AccountDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AccountUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AccountUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          upsert: {
            args: Prisma.AccountUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          aggregate: {
            args: Prisma.AccountAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAccount>
          }
          groupBy: {
            args: Prisma.AccountGroupByArgs<ExtArgs>
            result: $Utils.Optional<AccountGroupByOutputType>[]
          }
          count: {
            args: Prisma.AccountCountArgs<ExtArgs>
            result: $Utils.Optional<AccountCountAggregateOutputType> | number
          }
        }
      }
      Verification: {
        payload: Prisma.$VerificationPayload<ExtArgs>
        fields: Prisma.VerificationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VerificationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VerificationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>
          }
          findFirst: {
            args: Prisma.VerificationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VerificationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>
          }
          findMany: {
            args: Prisma.VerificationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>[]
          }
          create: {
            args: Prisma.VerificationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>
          }
          createMany: {
            args: Prisma.VerificationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VerificationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>[]
          }
          delete: {
            args: Prisma.VerificationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>
          }
          update: {
            args: Prisma.VerificationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>
          }
          deleteMany: {
            args: Prisma.VerificationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VerificationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VerificationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>[]
          }
          upsert: {
            args: Prisma.VerificationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>
          }
          aggregate: {
            args: Prisma.VerificationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVerification>
          }
          groupBy: {
            args: Prisma.VerificationGroupByArgs<ExtArgs>
            result: $Utils.Optional<VerificationGroupByOutputType>[]
          }
          count: {
            args: Prisma.VerificationCountArgs<ExtArgs>
            result: $Utils.Optional<VerificationCountAggregateOutputType> | number
          }
        }
      }
      Signalements: {
        payload: Prisma.$SignalementsPayload<ExtArgs>
        fields: Prisma.SignalementsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SignalementsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SignalementsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SignalementsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SignalementsPayload>
          }
          findFirst: {
            args: Prisma.SignalementsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SignalementsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SignalementsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SignalementsPayload>
          }
          findMany: {
            args: Prisma.SignalementsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SignalementsPayload>[]
          }
          create: {
            args: Prisma.SignalementsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SignalementsPayload>
          }
          createMany: {
            args: Prisma.SignalementsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SignalementsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SignalementsPayload>[]
          }
          delete: {
            args: Prisma.SignalementsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SignalementsPayload>
          }
          update: {
            args: Prisma.SignalementsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SignalementsPayload>
          }
          deleteMany: {
            args: Prisma.SignalementsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SignalementsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SignalementsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SignalementsPayload>[]
          }
          upsert: {
            args: Prisma.SignalementsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SignalementsPayload>
          }
          aggregate: {
            args: Prisma.SignalementsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSignalements>
          }
          groupBy: {
            args: Prisma.SignalementsGroupByArgs<ExtArgs>
            result: $Utils.Optional<SignalementsGroupByOutputType>[]
          }
          count: {
            args: Prisma.SignalementsCountArgs<ExtArgs>
            result: $Utils.Optional<SignalementsCountAggregateOutputType> | number
          }
        }
      }
      Patients: {
        payload: Prisma.$PatientsPayload<ExtArgs>
        fields: Prisma.PatientsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PatientsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PatientsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientsPayload>
          }
          findFirst: {
            args: Prisma.PatientsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PatientsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientsPayload>
          }
          findMany: {
            args: Prisma.PatientsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientsPayload>[]
          }
          create: {
            args: Prisma.PatientsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientsPayload>
          }
          createMany: {
            args: Prisma.PatientsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PatientsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientsPayload>[]
          }
          delete: {
            args: Prisma.PatientsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientsPayload>
          }
          update: {
            args: Prisma.PatientsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientsPayload>
          }
          deleteMany: {
            args: Prisma.PatientsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PatientsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PatientsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientsPayload>[]
          }
          upsert: {
            args: Prisma.PatientsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientsPayload>
          }
          aggregate: {
            args: Prisma.PatientsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePatients>
          }
          groupBy: {
            args: Prisma.PatientsGroupByArgs<ExtArgs>
            result: $Utils.Optional<PatientsGroupByOutputType>[]
          }
          count: {
            args: Prisma.PatientsCountArgs<ExtArgs>
            result: $Utils.Optional<PatientsCountAggregateOutputType> | number
          }
        }
      }
      Medecins: {
        payload: Prisma.$MedecinsPayload<ExtArgs>
        fields: Prisma.MedecinsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MedecinsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedecinsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MedecinsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedecinsPayload>
          }
          findFirst: {
            args: Prisma.MedecinsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedecinsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MedecinsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedecinsPayload>
          }
          findMany: {
            args: Prisma.MedecinsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedecinsPayload>[]
          }
          create: {
            args: Prisma.MedecinsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedecinsPayload>
          }
          createMany: {
            args: Prisma.MedecinsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MedecinsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedecinsPayload>[]
          }
          delete: {
            args: Prisma.MedecinsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedecinsPayload>
          }
          update: {
            args: Prisma.MedecinsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedecinsPayload>
          }
          deleteMany: {
            args: Prisma.MedecinsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MedecinsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MedecinsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedecinsPayload>[]
          }
          upsert: {
            args: Prisma.MedecinsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedecinsPayload>
          }
          aggregate: {
            args: Prisma.MedecinsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMedecins>
          }
          groupBy: {
            args: Prisma.MedecinsGroupByArgs<ExtArgs>
            result: $Utils.Optional<MedecinsGroupByOutputType>[]
          }
          count: {
            args: Prisma.MedecinsCountArgs<ExtArgs>
            result: $Utils.Optional<MedecinsCountAggregateOutputType> | number
          }
        }
      }
      RendezVous: {
        payload: Prisma.$RendezVousPayload<ExtArgs>
        fields: Prisma.RendezVousFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RendezVousFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RendezVousPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RendezVousFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RendezVousPayload>
          }
          findFirst: {
            args: Prisma.RendezVousFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RendezVousPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RendezVousFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RendezVousPayload>
          }
          findMany: {
            args: Prisma.RendezVousFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RendezVousPayload>[]
          }
          create: {
            args: Prisma.RendezVousCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RendezVousPayload>
          }
          createMany: {
            args: Prisma.RendezVousCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RendezVousCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RendezVousPayload>[]
          }
          delete: {
            args: Prisma.RendezVousDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RendezVousPayload>
          }
          update: {
            args: Prisma.RendezVousUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RendezVousPayload>
          }
          deleteMany: {
            args: Prisma.RendezVousDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RendezVousUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RendezVousUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RendezVousPayload>[]
          }
          upsert: {
            args: Prisma.RendezVousUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RendezVousPayload>
          }
          aggregate: {
            args: Prisma.RendezVousAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRendezVous>
          }
          groupBy: {
            args: Prisma.RendezVousGroupByArgs<ExtArgs>
            result: $Utils.Optional<RendezVousGroupByOutputType>[]
          }
          count: {
            args: Prisma.RendezVousCountArgs<ExtArgs>
            result: $Utils.Optional<RendezVousCountAggregateOutputType> | number
          }
        }
      }
      Posts: {
        payload: Prisma.$PostsPayload<ExtArgs>
        fields: Prisma.PostsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PostsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PostsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostsPayload>
          }
          findFirst: {
            args: Prisma.PostsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PostsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostsPayload>
          }
          findMany: {
            args: Prisma.PostsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostsPayload>[]
          }
          create: {
            args: Prisma.PostsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostsPayload>
          }
          createMany: {
            args: Prisma.PostsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PostsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostsPayload>[]
          }
          delete: {
            args: Prisma.PostsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostsPayload>
          }
          update: {
            args: Prisma.PostsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostsPayload>
          }
          deleteMany: {
            args: Prisma.PostsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PostsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PostsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostsPayload>[]
          }
          upsert: {
            args: Prisma.PostsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostsPayload>
          }
          aggregate: {
            args: Prisma.PostsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePosts>
          }
          groupBy: {
            args: Prisma.PostsGroupByArgs<ExtArgs>
            result: $Utils.Optional<PostsGroupByOutputType>[]
          }
          count: {
            args: Prisma.PostsCountArgs<ExtArgs>
            result: $Utils.Optional<PostsCountAggregateOutputType> | number
          }
        }
      }
      Commentaires: {
        payload: Prisma.$CommentairesPayload<ExtArgs>
        fields: Prisma.CommentairesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CommentairesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentairesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CommentairesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentairesPayload>
          }
          findFirst: {
            args: Prisma.CommentairesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentairesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CommentairesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentairesPayload>
          }
          findMany: {
            args: Prisma.CommentairesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentairesPayload>[]
          }
          create: {
            args: Prisma.CommentairesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentairesPayload>
          }
          createMany: {
            args: Prisma.CommentairesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CommentairesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentairesPayload>[]
          }
          delete: {
            args: Prisma.CommentairesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentairesPayload>
          }
          update: {
            args: Prisma.CommentairesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentairesPayload>
          }
          deleteMany: {
            args: Prisma.CommentairesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CommentairesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CommentairesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentairesPayload>[]
          }
          upsert: {
            args: Prisma.CommentairesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentairesPayload>
          }
          aggregate: {
            args: Prisma.CommentairesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCommentaires>
          }
          groupBy: {
            args: Prisma.CommentairesGroupByArgs<ExtArgs>
            result: $Utils.Optional<CommentairesGroupByOutputType>[]
          }
          count: {
            args: Prisma.CommentairesCountArgs<ExtArgs>
            result: $Utils.Optional<CommentairesCountAggregateOutputType> | number
          }
        }
      }
      Consultations: {
        payload: Prisma.$ConsultationsPayload<ExtArgs>
        fields: Prisma.ConsultationsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ConsultationsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsultationsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ConsultationsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsultationsPayload>
          }
          findFirst: {
            args: Prisma.ConsultationsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsultationsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ConsultationsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsultationsPayload>
          }
          findMany: {
            args: Prisma.ConsultationsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsultationsPayload>[]
          }
          create: {
            args: Prisma.ConsultationsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsultationsPayload>
          }
          createMany: {
            args: Prisma.ConsultationsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ConsultationsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsultationsPayload>[]
          }
          delete: {
            args: Prisma.ConsultationsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsultationsPayload>
          }
          update: {
            args: Prisma.ConsultationsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsultationsPayload>
          }
          deleteMany: {
            args: Prisma.ConsultationsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ConsultationsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ConsultationsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsultationsPayload>[]
          }
          upsert: {
            args: Prisma.ConsultationsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsultationsPayload>
          }
          aggregate: {
            args: Prisma.ConsultationsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateConsultations>
          }
          groupBy: {
            args: Prisma.ConsultationsGroupByArgs<ExtArgs>
            result: $Utils.Optional<ConsultationsGroupByOutputType>[]
          }
          count: {
            args: Prisma.ConsultationsCountArgs<ExtArgs>
            result: $Utils.Optional<ConsultationsCountAggregateOutputType> | number
          }
        }
      }
      Fichiers: {
        payload: Prisma.$FichiersPayload<ExtArgs>
        fields: Prisma.FichiersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FichiersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FichiersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FichiersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FichiersPayload>
          }
          findFirst: {
            args: Prisma.FichiersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FichiersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FichiersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FichiersPayload>
          }
          findMany: {
            args: Prisma.FichiersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FichiersPayload>[]
          }
          create: {
            args: Prisma.FichiersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FichiersPayload>
          }
          createMany: {
            args: Prisma.FichiersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FichiersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FichiersPayload>[]
          }
          delete: {
            args: Prisma.FichiersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FichiersPayload>
          }
          update: {
            args: Prisma.FichiersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FichiersPayload>
          }
          deleteMany: {
            args: Prisma.FichiersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FichiersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FichiersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FichiersPayload>[]
          }
          upsert: {
            args: Prisma.FichiersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FichiersPayload>
          }
          aggregate: {
            args: Prisma.FichiersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFichiers>
          }
          groupBy: {
            args: Prisma.FichiersGroupByArgs<ExtArgs>
            result: $Utils.Optional<FichiersGroupByOutputType>[]
          }
          count: {
            args: Prisma.FichiersCountArgs<ExtArgs>
            result: $Utils.Optional<FichiersCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    session?: SessionOmit
    account?: AccountOmit
    verification?: VerificationOmit
    signalements?: SignalementsOmit
    patients?: PatientsOmit
    medecins?: MedecinsOmit
    rendezVous?: RendezVousOmit
    posts?: PostsOmit
    commentaires?: CommentairesOmit
    consultations?: ConsultationsOmit
    fichiers?: FichiersOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    sessions: number
    accounts: number
    signalements: number
    patient: number
    medecin: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sessions?: boolean | UserCountOutputTypeCountSessionsArgs
    accounts?: boolean | UserCountOutputTypeCountAccountsArgs
    signalements?: boolean | UserCountOutputTypeCountSignalementsArgs
    patient?: boolean | UserCountOutputTypeCountPatientArgs
    medecin?: boolean | UserCountOutputTypeCountMedecinArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAccountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSignalementsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SignalementsWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPatientArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PatientsWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountMedecinArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MedecinsWhereInput
  }


  /**
   * Count Type PatientsCountOutputType
   */

  export type PatientsCountOutputType = {
    rendezVous: number
    consultations: number
  }

  export type PatientsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rendezVous?: boolean | PatientsCountOutputTypeCountRendezVousArgs
    consultations?: boolean | PatientsCountOutputTypeCountConsultationsArgs
  }

  // Custom InputTypes
  /**
   * PatientsCountOutputType without action
   */
  export type PatientsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PatientsCountOutputType
     */
    select?: PatientsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PatientsCountOutputType without action
   */
  export type PatientsCountOutputTypeCountRendezVousArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RendezVousWhereInput
  }

  /**
   * PatientsCountOutputType without action
   */
  export type PatientsCountOutputTypeCountConsultationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ConsultationsWhereInput
  }


  /**
   * Count Type MedecinsCountOutputType
   */

  export type MedecinsCountOutputType = {
    rendezVous: number
    posts: number
    consultations: number
  }

  export type MedecinsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rendezVous?: boolean | MedecinsCountOutputTypeCountRendezVousArgs
    posts?: boolean | MedecinsCountOutputTypeCountPostsArgs
    consultations?: boolean | MedecinsCountOutputTypeCountConsultationsArgs
  }

  // Custom InputTypes
  /**
   * MedecinsCountOutputType without action
   */
  export type MedecinsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedecinsCountOutputType
     */
    select?: MedecinsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MedecinsCountOutputType without action
   */
  export type MedecinsCountOutputTypeCountRendezVousArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RendezVousWhereInput
  }

  /**
   * MedecinsCountOutputType without action
   */
  export type MedecinsCountOutputTypeCountPostsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostsWhereInput
  }

  /**
   * MedecinsCountOutputType without action
   */
  export type MedecinsCountOutputTypeCountConsultationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ConsultationsWhereInput
  }


  /**
   * Count Type PostsCountOutputType
   */

  export type PostsCountOutputType = {
    commentaires: number
  }

  export type PostsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    commentaires?: boolean | PostsCountOutputTypeCountCommentairesArgs
  }

  // Custom InputTypes
  /**
   * PostsCountOutputType without action
   */
  export type PostsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostsCountOutputType
     */
    select?: PostsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PostsCountOutputType without action
   */
  export type PostsCountOutputTypeCountCommentairesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommentairesWhereInput
  }


  /**
   * Count Type ConsultationsCountOutputType
   */

  export type ConsultationsCountOutputType = {
    fichiers: number
  }

  export type ConsultationsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    fichiers?: boolean | ConsultationsCountOutputTypeCountFichiersArgs
  }

  // Custom InputTypes
  /**
   * ConsultationsCountOutputType without action
   */
  export type ConsultationsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConsultationsCountOutputType
     */
    select?: ConsultationsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ConsultationsCountOutputType without action
   */
  export type ConsultationsCountOutputTypeCountFichiersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FichiersWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    email: string | null
    name: string | null
    postnom: string | null
    prenom: string | null
    slug: string | null
    numero_telephone: string | null
    date_de_naissance: Date | null
    adresse_residence: string | null
    emailVerified: boolean | null
    image: string | null
    sexe: $Enums.SEXE | null
    updatedAt: Date | null
    is_active: boolean | null
    role: string | null
    banned: boolean | null
    banReason: string | null
    banExpires: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    email: string | null
    name: string | null
    postnom: string | null
    prenom: string | null
    slug: string | null
    numero_telephone: string | null
    date_de_naissance: Date | null
    adresse_residence: string | null
    emailVerified: boolean | null
    image: string | null
    sexe: $Enums.SEXE | null
    updatedAt: Date | null
    is_active: boolean | null
    role: string | null
    banned: boolean | null
    banReason: string | null
    banExpires: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    createdAt: number
    email: number
    name: number
    postnom: number
    prenom: number
    slug: number
    numero_telephone: number
    date_de_naissance: number
    adresse_residence: number
    emailVerified: number
    image: number
    sexe: number
    updatedAt: number
    is_active: number
    role: number
    banned: number
    banReason: number
    banExpires: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    createdAt?: true
    email?: true
    name?: true
    postnom?: true
    prenom?: true
    slug?: true
    numero_telephone?: true
    date_de_naissance?: true
    adresse_residence?: true
    emailVerified?: true
    image?: true
    sexe?: true
    updatedAt?: true
    is_active?: true
    role?: true
    banned?: true
    banReason?: true
    banExpires?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    createdAt?: true
    email?: true
    name?: true
    postnom?: true
    prenom?: true
    slug?: true
    numero_telephone?: true
    date_de_naissance?: true
    adresse_residence?: true
    emailVerified?: true
    image?: true
    sexe?: true
    updatedAt?: true
    is_active?: true
    role?: true
    banned?: true
    banReason?: true
    banExpires?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    createdAt?: true
    email?: true
    name?: true
    postnom?: true
    prenom?: true
    slug?: true
    numero_telephone?: true
    date_de_naissance?: true
    adresse_residence?: true
    emailVerified?: true
    image?: true
    sexe?: true
    updatedAt?: true
    is_active?: true
    role?: true
    banned?: true
    banReason?: true
    banExpires?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    createdAt: Date
    email: string
    name: string | null
    postnom: string | null
    prenom: string | null
    slug: string | null
    numero_telephone: string | null
    date_de_naissance: Date | null
    adresse_residence: string | null
    emailVerified: boolean
    image: string | null
    sexe: $Enums.SEXE | null
    updatedAt: Date
    is_active: boolean
    role: string | null
    banned: boolean | null
    banReason: string | null
    banExpires: Date | null
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    email?: boolean
    name?: boolean
    postnom?: boolean
    prenom?: boolean
    slug?: boolean
    numero_telephone?: boolean
    date_de_naissance?: boolean
    adresse_residence?: boolean
    emailVerified?: boolean
    image?: boolean
    sexe?: boolean
    updatedAt?: boolean
    is_active?: boolean
    role?: boolean
    banned?: boolean
    banReason?: boolean
    banExpires?: boolean
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    accounts?: boolean | User$accountsArgs<ExtArgs>
    signalements?: boolean | User$signalementsArgs<ExtArgs>
    patient?: boolean | User$patientArgs<ExtArgs>
    medecin?: boolean | User$medecinArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    email?: boolean
    name?: boolean
    postnom?: boolean
    prenom?: boolean
    slug?: boolean
    numero_telephone?: boolean
    date_de_naissance?: boolean
    adresse_residence?: boolean
    emailVerified?: boolean
    image?: boolean
    sexe?: boolean
    updatedAt?: boolean
    is_active?: boolean
    role?: boolean
    banned?: boolean
    banReason?: boolean
    banExpires?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    email?: boolean
    name?: boolean
    postnom?: boolean
    prenom?: boolean
    slug?: boolean
    numero_telephone?: boolean
    date_de_naissance?: boolean
    adresse_residence?: boolean
    emailVerified?: boolean
    image?: boolean
    sexe?: boolean
    updatedAt?: boolean
    is_active?: boolean
    role?: boolean
    banned?: boolean
    banReason?: boolean
    banExpires?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    createdAt?: boolean
    email?: boolean
    name?: boolean
    postnom?: boolean
    prenom?: boolean
    slug?: boolean
    numero_telephone?: boolean
    date_de_naissance?: boolean
    adresse_residence?: boolean
    emailVerified?: boolean
    image?: boolean
    sexe?: boolean
    updatedAt?: boolean
    is_active?: boolean
    role?: boolean
    banned?: boolean
    banReason?: boolean
    banExpires?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "email" | "name" | "postnom" | "prenom" | "slug" | "numero_telephone" | "date_de_naissance" | "adresse_residence" | "emailVerified" | "image" | "sexe" | "updatedAt" | "is_active" | "role" | "banned" | "banReason" | "banExpires", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    accounts?: boolean | User$accountsArgs<ExtArgs>
    signalements?: boolean | User$signalementsArgs<ExtArgs>
    patient?: boolean | User$patientArgs<ExtArgs>
    medecin?: boolean | User$medecinArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      sessions: Prisma.$SessionPayload<ExtArgs>[]
      accounts: Prisma.$AccountPayload<ExtArgs>[]
      signalements: Prisma.$SignalementsPayload<ExtArgs>[]
      patient: Prisma.$PatientsPayload<ExtArgs>[]
      medecin: Prisma.$MedecinsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      email: string
      name: string | null
      postnom: string | null
      prenom: string | null
      slug: string | null
      numero_telephone: string | null
      date_de_naissance: Date | null
      adresse_residence: string | null
      emailVerified: boolean
      image: string | null
      sexe: $Enums.SEXE | null
      updatedAt: Date
      is_active: boolean
      role: string | null
      banned: boolean | null
      banReason: string | null
      banExpires: Date | null
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    sessions<T extends User$sessionsArgs<ExtArgs> = {}>(args?: Subset<T, User$sessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    accounts<T extends User$accountsArgs<ExtArgs> = {}>(args?: Subset<T, User$accountsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    signalements<T extends User$signalementsArgs<ExtArgs> = {}>(args?: Subset<T, User$signalementsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SignalementsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    patient<T extends User$patientArgs<ExtArgs> = {}>(args?: Subset<T, User$patientArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PatientsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    medecin<T extends User$medecinArgs<ExtArgs> = {}>(args?: Subset<T, User$medecinArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MedecinsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly email: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly postnom: FieldRef<"User", 'String'>
    readonly prenom: FieldRef<"User", 'String'>
    readonly slug: FieldRef<"User", 'String'>
    readonly numero_telephone: FieldRef<"User", 'String'>
    readonly date_de_naissance: FieldRef<"User", 'DateTime'>
    readonly adresse_residence: FieldRef<"User", 'String'>
    readonly emailVerified: FieldRef<"User", 'Boolean'>
    readonly image: FieldRef<"User", 'String'>
    readonly sexe: FieldRef<"User", 'SEXE'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
    readonly is_active: FieldRef<"User", 'Boolean'>
    readonly role: FieldRef<"User", 'String'>
    readonly banned: FieldRef<"User", 'Boolean'>
    readonly banReason: FieldRef<"User", 'String'>
    readonly banExpires: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.sessions
   */
  export type User$sessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    cursor?: SessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * User.accounts
   */
  export type User$accountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    where?: AccountWhereInput
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    cursor?: AccountWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * User.signalements
   */
  export type User$signalementsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Signalements
     */
    select?: SignalementsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Signalements
     */
    omit?: SignalementsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SignalementsInclude<ExtArgs> | null
    where?: SignalementsWhereInput
    orderBy?: SignalementsOrderByWithRelationInput | SignalementsOrderByWithRelationInput[]
    cursor?: SignalementsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SignalementsScalarFieldEnum | SignalementsScalarFieldEnum[]
  }

  /**
   * User.patient
   */
  export type User$patientArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patients
     */
    select?: PatientsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patients
     */
    omit?: PatientsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientsInclude<ExtArgs> | null
    where?: PatientsWhereInput
    orderBy?: PatientsOrderByWithRelationInput | PatientsOrderByWithRelationInput[]
    cursor?: PatientsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PatientsScalarFieldEnum | PatientsScalarFieldEnum[]
  }

  /**
   * User.medecin
   */
  export type User$medecinArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medecins
     */
    select?: MedecinsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Medecins
     */
    omit?: MedecinsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedecinsInclude<ExtArgs> | null
    where?: MedecinsWhereInput
    orderBy?: MedecinsOrderByWithRelationInput | MedecinsOrderByWithRelationInput[]
    cursor?: MedecinsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MedecinsScalarFieldEnum | MedecinsScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Session
   */

  export type AggregateSession = {
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  export type SessionMinAggregateOutputType = {
    id: string | null
    expiresAt: Date | null
    token: string | null
    createdAt: Date | null
    updatedAt: Date | null
    ipAddress: string | null
    userAgent: string | null
    userId: string | null
    impersonatedBy: string | null
  }

  export type SessionMaxAggregateOutputType = {
    id: string | null
    expiresAt: Date | null
    token: string | null
    createdAt: Date | null
    updatedAt: Date | null
    ipAddress: string | null
    userAgent: string | null
    userId: string | null
    impersonatedBy: string | null
  }

  export type SessionCountAggregateOutputType = {
    id: number
    expiresAt: number
    token: number
    createdAt: number
    updatedAt: number
    ipAddress: number
    userAgent: number
    userId: number
    impersonatedBy: number
    _all: number
  }


  export type SessionMinAggregateInputType = {
    id?: true
    expiresAt?: true
    token?: true
    createdAt?: true
    updatedAt?: true
    ipAddress?: true
    userAgent?: true
    userId?: true
    impersonatedBy?: true
  }

  export type SessionMaxAggregateInputType = {
    id?: true
    expiresAt?: true
    token?: true
    createdAt?: true
    updatedAt?: true
    ipAddress?: true
    userAgent?: true
    userId?: true
    impersonatedBy?: true
  }

  export type SessionCountAggregateInputType = {
    id?: true
    expiresAt?: true
    token?: true
    createdAt?: true
    updatedAt?: true
    ipAddress?: true
    userAgent?: true
    userId?: true
    impersonatedBy?: true
    _all?: true
  }

  export type SessionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Session to aggregate.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sessions
    **/
    _count?: true | SessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SessionMaxAggregateInputType
  }

  export type GetSessionAggregateType<T extends SessionAggregateArgs> = {
        [P in keyof T & keyof AggregateSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSession[P]>
      : GetScalarType<T[P], AggregateSession[P]>
  }




  export type SessionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithAggregationInput | SessionOrderByWithAggregationInput[]
    by: SessionScalarFieldEnum[] | SessionScalarFieldEnum
    having?: SessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SessionCountAggregateInputType | true
    _min?: SessionMinAggregateInputType
    _max?: SessionMaxAggregateInputType
  }

  export type SessionGroupByOutputType = {
    id: string
    expiresAt: Date
    token: string
    createdAt: Date
    updatedAt: Date
    ipAddress: string | null
    userAgent: string | null
    userId: string
    impersonatedBy: string | null
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  type GetSessionGroupByPayload<T extends SessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SessionGroupByOutputType[P]>
            : GetScalarType<T[P], SessionGroupByOutputType[P]>
        }
      >
    >


  export type SessionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    expiresAt?: boolean
    token?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    userId?: boolean
    impersonatedBy?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    expiresAt?: boolean
    token?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    userId?: boolean
    impersonatedBy?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    expiresAt?: boolean
    token?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    userId?: boolean
    impersonatedBy?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectScalar = {
    id?: boolean
    expiresAt?: boolean
    token?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    userId?: boolean
    impersonatedBy?: boolean
  }

  export type SessionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "expiresAt" | "token" | "createdAt" | "updatedAt" | "ipAddress" | "userAgent" | "userId" | "impersonatedBy", ExtArgs["result"]["session"]>
  export type SessionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SessionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SessionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $SessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Session"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      expiresAt: Date
      token: string
      createdAt: Date
      updatedAt: Date
      ipAddress: string | null
      userAgent: string | null
      userId: string
      impersonatedBy: string | null
    }, ExtArgs["result"]["session"]>
    composites: {}
  }

  type SessionGetPayload<S extends boolean | null | undefined | SessionDefaultArgs> = $Result.GetResult<Prisma.$SessionPayload, S>

  type SessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SessionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SessionCountAggregateInputType | true
    }

  export interface SessionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Session'], meta: { name: 'Session' } }
    /**
     * Find zero or one Session that matches the filter.
     * @param {SessionFindUniqueArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SessionFindUniqueArgs>(args: SelectSubset<T, SessionFindUniqueArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Session that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SessionFindUniqueOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SessionFindUniqueOrThrowArgs>(args: SelectSubset<T, SessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SessionFindFirstArgs>(args?: SelectSubset<T, SessionFindFirstArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SessionFindFirstOrThrowArgs>(args?: SelectSubset<T, SessionFindFirstOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sessions
     * const sessions = await prisma.session.findMany()
     * 
     * // Get first 10 Sessions
     * const sessions = await prisma.session.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sessionWithIdOnly = await prisma.session.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SessionFindManyArgs>(args?: SelectSubset<T, SessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Session.
     * @param {SessionCreateArgs} args - Arguments to create a Session.
     * @example
     * // Create one Session
     * const Session = await prisma.session.create({
     *   data: {
     *     // ... data to create a Session
     *   }
     * })
     * 
     */
    create<T extends SessionCreateArgs>(args: SelectSubset<T, SessionCreateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sessions.
     * @param {SessionCreateManyArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SessionCreateManyArgs>(args?: SelectSubset<T, SessionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Sessions and returns the data saved in the database.
     * @param {SessionCreateManyAndReturnArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Sessions and only return the `id`
     * const sessionWithIdOnly = await prisma.session.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SessionCreateManyAndReturnArgs>(args?: SelectSubset<T, SessionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Session.
     * @param {SessionDeleteArgs} args - Arguments to delete one Session.
     * @example
     * // Delete one Session
     * const Session = await prisma.session.delete({
     *   where: {
     *     // ... filter to delete one Session
     *   }
     * })
     * 
     */
    delete<T extends SessionDeleteArgs>(args: SelectSubset<T, SessionDeleteArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Session.
     * @param {SessionUpdateArgs} args - Arguments to update one Session.
     * @example
     * // Update one Session
     * const session = await prisma.session.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SessionUpdateArgs>(args: SelectSubset<T, SessionUpdateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sessions.
     * @param {SessionDeleteManyArgs} args - Arguments to filter Sessions to delete.
     * @example
     * // Delete a few Sessions
     * const { count } = await prisma.session.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SessionDeleteManyArgs>(args?: SelectSubset<T, SessionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SessionUpdateManyArgs>(args: SelectSubset<T, SessionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions and returns the data updated in the database.
     * @param {SessionUpdateManyAndReturnArgs} args - Arguments to update many Sessions.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Sessions and only return the `id`
     * const sessionWithIdOnly = await prisma.session.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SessionUpdateManyAndReturnArgs>(args: SelectSubset<T, SessionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Session.
     * @param {SessionUpsertArgs} args - Arguments to update or create a Session.
     * @example
     * // Update or create a Session
     * const session = await prisma.session.upsert({
     *   create: {
     *     // ... data to create a Session
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Session we want to update
     *   }
     * })
     */
    upsert<T extends SessionUpsertArgs>(args: SelectSubset<T, SessionUpsertArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionCountArgs} args - Arguments to filter Sessions to count.
     * @example
     * // Count the number of Sessions
     * const count = await prisma.session.count({
     *   where: {
     *     // ... the filter for the Sessions we want to count
     *   }
     * })
    **/
    count<T extends SessionCountArgs>(
      args?: Subset<T, SessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SessionAggregateArgs>(args: Subset<T, SessionAggregateArgs>): Prisma.PrismaPromise<GetSessionAggregateType<T>>

    /**
     * Group by Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SessionGroupByArgs['orderBy'] }
        : { orderBy?: SessionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Session model
   */
  readonly fields: SessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Session.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SessionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Session model
   */
  interface SessionFieldRefs {
    readonly id: FieldRef<"Session", 'String'>
    readonly expiresAt: FieldRef<"Session", 'DateTime'>
    readonly token: FieldRef<"Session", 'String'>
    readonly createdAt: FieldRef<"Session", 'DateTime'>
    readonly updatedAt: FieldRef<"Session", 'DateTime'>
    readonly ipAddress: FieldRef<"Session", 'String'>
    readonly userAgent: FieldRef<"Session", 'String'>
    readonly userId: FieldRef<"Session", 'String'>
    readonly impersonatedBy: FieldRef<"Session", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Session findUnique
   */
  export type SessionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findUniqueOrThrow
   */
  export type SessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findFirst
   */
  export type SessionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findFirstOrThrow
   */
  export type SessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findMany
   */
  export type SessionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Sessions to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session create
   */
  export type SessionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to create a Session.
     */
    data: XOR<SessionCreateInput, SessionUncheckedCreateInput>
  }

  /**
   * Session createMany
   */
  export type SessionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Session createManyAndReturn
   */
  export type SessionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Session update
   */
  export type SessionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to update a Session.
     */
    data: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
    /**
     * Choose, which Session to update.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session updateMany
   */
  export type SessionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to update.
     */
    limit?: number
  }

  /**
   * Session updateManyAndReturn
   */
  export type SessionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Session upsert
   */
  export type SessionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The filter to search for the Session to update in case it exists.
     */
    where: SessionWhereUniqueInput
    /**
     * In case the Session found by the `where` argument doesn't exist, create a new Session with this data.
     */
    create: XOR<SessionCreateInput, SessionUncheckedCreateInput>
    /**
     * In case the Session was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
  }

  /**
   * Session delete
   */
  export type SessionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter which Session to delete.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session deleteMany
   */
  export type SessionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sessions to delete
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to delete.
     */
    limit?: number
  }

  /**
   * Session without action
   */
  export type SessionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
  }


  /**
   * Model Account
   */

  export type AggregateAccount = {
    _count: AccountCountAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  export type AccountMinAggregateOutputType = {
    id: string | null
    accountId: string | null
    providerId: string | null
    userId: string | null
    accessToken: string | null
    refreshToken: string | null
    idToken: string | null
    accessTokenExpiresAt: Date | null
    refreshTokenExpiresAt: Date | null
    scope: string | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AccountMaxAggregateOutputType = {
    id: string | null
    accountId: string | null
    providerId: string | null
    userId: string | null
    accessToken: string | null
    refreshToken: string | null
    idToken: string | null
    accessTokenExpiresAt: Date | null
    refreshTokenExpiresAt: Date | null
    scope: string | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AccountCountAggregateOutputType = {
    id: number
    accountId: number
    providerId: number
    userId: number
    accessToken: number
    refreshToken: number
    idToken: number
    accessTokenExpiresAt: number
    refreshTokenExpiresAt: number
    scope: number
    password: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AccountMinAggregateInputType = {
    id?: true
    accountId?: true
    providerId?: true
    userId?: true
    accessToken?: true
    refreshToken?: true
    idToken?: true
    accessTokenExpiresAt?: true
    refreshTokenExpiresAt?: true
    scope?: true
    password?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AccountMaxAggregateInputType = {
    id?: true
    accountId?: true
    providerId?: true
    userId?: true
    accessToken?: true
    refreshToken?: true
    idToken?: true
    accessTokenExpiresAt?: true
    refreshTokenExpiresAt?: true
    scope?: true
    password?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AccountCountAggregateInputType = {
    id?: true
    accountId?: true
    providerId?: true
    userId?: true
    accessToken?: true
    refreshToken?: true
    idToken?: true
    accessTokenExpiresAt?: true
    refreshTokenExpiresAt?: true
    scope?: true
    password?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AccountAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Account to aggregate.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Accounts
    **/
    _count?: true | AccountCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AccountMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AccountMaxAggregateInputType
  }

  export type GetAccountAggregateType<T extends AccountAggregateArgs> = {
        [P in keyof T & keyof AggregateAccount]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAccount[P]>
      : GetScalarType<T[P], AggregateAccount[P]>
  }




  export type AccountGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountWhereInput
    orderBy?: AccountOrderByWithAggregationInput | AccountOrderByWithAggregationInput[]
    by: AccountScalarFieldEnum[] | AccountScalarFieldEnum
    having?: AccountScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AccountCountAggregateInputType | true
    _min?: AccountMinAggregateInputType
    _max?: AccountMaxAggregateInputType
  }

  export type AccountGroupByOutputType = {
    id: string
    accountId: string
    providerId: string
    userId: string
    accessToken: string | null
    refreshToken: string | null
    idToken: string | null
    accessTokenExpiresAt: Date | null
    refreshTokenExpiresAt: Date | null
    scope: string | null
    password: string | null
    createdAt: Date
    updatedAt: Date
    _count: AccountCountAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  type GetAccountGroupByPayload<T extends AccountGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AccountGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AccountGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AccountGroupByOutputType[P]>
            : GetScalarType<T[P], AccountGroupByOutputType[P]>
        }
      >
    >


  export type AccountSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    accountId?: boolean
    providerId?: boolean
    userId?: boolean
    accessToken?: boolean
    refreshToken?: boolean
    idToken?: boolean
    accessTokenExpiresAt?: boolean
    refreshTokenExpiresAt?: boolean
    scope?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    accountId?: boolean
    providerId?: boolean
    userId?: boolean
    accessToken?: boolean
    refreshToken?: boolean
    idToken?: boolean
    accessTokenExpiresAt?: boolean
    refreshTokenExpiresAt?: boolean
    scope?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    accountId?: boolean
    providerId?: boolean
    userId?: boolean
    accessToken?: boolean
    refreshToken?: boolean
    idToken?: boolean
    accessTokenExpiresAt?: boolean
    refreshTokenExpiresAt?: boolean
    scope?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectScalar = {
    id?: boolean
    accountId?: boolean
    providerId?: boolean
    userId?: boolean
    accessToken?: boolean
    refreshToken?: boolean
    idToken?: boolean
    accessTokenExpiresAt?: boolean
    refreshTokenExpiresAt?: boolean
    scope?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AccountOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "accountId" | "providerId" | "userId" | "accessToken" | "refreshToken" | "idToken" | "accessTokenExpiresAt" | "refreshTokenExpiresAt" | "scope" | "password" | "createdAt" | "updatedAt", ExtArgs["result"]["account"]>
  export type AccountInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AccountIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AccountIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $AccountPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Account"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      accountId: string
      providerId: string
      userId: string
      accessToken: string | null
      refreshToken: string | null
      idToken: string | null
      accessTokenExpiresAt: Date | null
      refreshTokenExpiresAt: Date | null
      scope: string | null
      password: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["account"]>
    composites: {}
  }

  type AccountGetPayload<S extends boolean | null | undefined | AccountDefaultArgs> = $Result.GetResult<Prisma.$AccountPayload, S>

  type AccountCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AccountFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AccountCountAggregateInputType | true
    }

  export interface AccountDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Account'], meta: { name: 'Account' } }
    /**
     * Find zero or one Account that matches the filter.
     * @param {AccountFindUniqueArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AccountFindUniqueArgs>(args: SelectSubset<T, AccountFindUniqueArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Account that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AccountFindUniqueOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AccountFindUniqueOrThrowArgs>(args: SelectSubset<T, AccountFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Account that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AccountFindFirstArgs>(args?: SelectSubset<T, AccountFindFirstArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Account that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AccountFindFirstOrThrowArgs>(args?: SelectSubset<T, AccountFindFirstOrThrowArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Accounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Accounts
     * const accounts = await prisma.account.findMany()
     * 
     * // Get first 10 Accounts
     * const accounts = await prisma.account.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const accountWithIdOnly = await prisma.account.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AccountFindManyArgs>(args?: SelectSubset<T, AccountFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Account.
     * @param {AccountCreateArgs} args - Arguments to create a Account.
     * @example
     * // Create one Account
     * const Account = await prisma.account.create({
     *   data: {
     *     // ... data to create a Account
     *   }
     * })
     * 
     */
    create<T extends AccountCreateArgs>(args: SelectSubset<T, AccountCreateArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Accounts.
     * @param {AccountCreateManyArgs} args - Arguments to create many Accounts.
     * @example
     * // Create many Accounts
     * const account = await prisma.account.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AccountCreateManyArgs>(args?: SelectSubset<T, AccountCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Accounts and returns the data saved in the database.
     * @param {AccountCreateManyAndReturnArgs} args - Arguments to create many Accounts.
     * @example
     * // Create many Accounts
     * const account = await prisma.account.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Accounts and only return the `id`
     * const accountWithIdOnly = await prisma.account.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AccountCreateManyAndReturnArgs>(args?: SelectSubset<T, AccountCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Account.
     * @param {AccountDeleteArgs} args - Arguments to delete one Account.
     * @example
     * // Delete one Account
     * const Account = await prisma.account.delete({
     *   where: {
     *     // ... filter to delete one Account
     *   }
     * })
     * 
     */
    delete<T extends AccountDeleteArgs>(args: SelectSubset<T, AccountDeleteArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Account.
     * @param {AccountUpdateArgs} args - Arguments to update one Account.
     * @example
     * // Update one Account
     * const account = await prisma.account.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AccountUpdateArgs>(args: SelectSubset<T, AccountUpdateArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Accounts.
     * @param {AccountDeleteManyArgs} args - Arguments to filter Accounts to delete.
     * @example
     * // Delete a few Accounts
     * const { count } = await prisma.account.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AccountDeleteManyArgs>(args?: SelectSubset<T, AccountDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Accounts
     * const account = await prisma.account.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AccountUpdateManyArgs>(args: SelectSubset<T, AccountUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accounts and returns the data updated in the database.
     * @param {AccountUpdateManyAndReturnArgs} args - Arguments to update many Accounts.
     * @example
     * // Update many Accounts
     * const account = await prisma.account.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Accounts and only return the `id`
     * const accountWithIdOnly = await prisma.account.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AccountUpdateManyAndReturnArgs>(args: SelectSubset<T, AccountUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Account.
     * @param {AccountUpsertArgs} args - Arguments to update or create a Account.
     * @example
     * // Update or create a Account
     * const account = await prisma.account.upsert({
     *   create: {
     *     // ... data to create a Account
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Account we want to update
     *   }
     * })
     */
    upsert<T extends AccountUpsertArgs>(args: SelectSubset<T, AccountUpsertArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountCountArgs} args - Arguments to filter Accounts to count.
     * @example
     * // Count the number of Accounts
     * const count = await prisma.account.count({
     *   where: {
     *     // ... the filter for the Accounts we want to count
     *   }
     * })
    **/
    count<T extends AccountCountArgs>(
      args?: Subset<T, AccountCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AccountCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AccountAggregateArgs>(args: Subset<T, AccountAggregateArgs>): Prisma.PrismaPromise<GetAccountAggregateType<T>>

    /**
     * Group by Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AccountGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AccountGroupByArgs['orderBy'] }
        : { orderBy?: AccountGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AccountGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAccountGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Account model
   */
  readonly fields: AccountFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Account.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AccountClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Account model
   */
  interface AccountFieldRefs {
    readonly id: FieldRef<"Account", 'String'>
    readonly accountId: FieldRef<"Account", 'String'>
    readonly providerId: FieldRef<"Account", 'String'>
    readonly userId: FieldRef<"Account", 'String'>
    readonly accessToken: FieldRef<"Account", 'String'>
    readonly refreshToken: FieldRef<"Account", 'String'>
    readonly idToken: FieldRef<"Account", 'String'>
    readonly accessTokenExpiresAt: FieldRef<"Account", 'DateTime'>
    readonly refreshTokenExpiresAt: FieldRef<"Account", 'DateTime'>
    readonly scope: FieldRef<"Account", 'String'>
    readonly password: FieldRef<"Account", 'String'>
    readonly createdAt: FieldRef<"Account", 'DateTime'>
    readonly updatedAt: FieldRef<"Account", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Account findUnique
   */
  export type AccountFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account findUniqueOrThrow
   */
  export type AccountFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account findFirst
   */
  export type AccountFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account findFirstOrThrow
   */
  export type AccountFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account findMany
   */
  export type AccountFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Accounts to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account create
   */
  export type AccountCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The data needed to create a Account.
     */
    data: XOR<AccountCreateInput, AccountUncheckedCreateInput>
  }

  /**
   * Account createMany
   */
  export type AccountCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Accounts.
     */
    data: AccountCreateManyInput | AccountCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Account createManyAndReturn
   */
  export type AccountCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * The data used to create many Accounts.
     */
    data: AccountCreateManyInput | AccountCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Account update
   */
  export type AccountUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The data needed to update a Account.
     */
    data: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
    /**
     * Choose, which Account to update.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account updateMany
   */
  export type AccountUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Accounts.
     */
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyInput>
    /**
     * Filter which Accounts to update
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to update.
     */
    limit?: number
  }

  /**
   * Account updateManyAndReturn
   */
  export type AccountUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * The data used to update Accounts.
     */
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyInput>
    /**
     * Filter which Accounts to update
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Account upsert
   */
  export type AccountUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The filter to search for the Account to update in case it exists.
     */
    where: AccountWhereUniqueInput
    /**
     * In case the Account found by the `where` argument doesn't exist, create a new Account with this data.
     */
    create: XOR<AccountCreateInput, AccountUncheckedCreateInput>
    /**
     * In case the Account was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
  }

  /**
   * Account delete
   */
  export type AccountDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter which Account to delete.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account deleteMany
   */
  export type AccountDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Accounts to delete
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to delete.
     */
    limit?: number
  }

  /**
   * Account without action
   */
  export type AccountDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
  }


  /**
   * Model Verification
   */

  export type AggregateVerification = {
    _count: VerificationCountAggregateOutputType | null
    _min: VerificationMinAggregateOutputType | null
    _max: VerificationMaxAggregateOutputType | null
  }

  export type VerificationMinAggregateOutputType = {
    id: string | null
    identifier: string | null
    value: string | null
    expiresAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type VerificationMaxAggregateOutputType = {
    id: string | null
    identifier: string | null
    value: string | null
    expiresAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type VerificationCountAggregateOutputType = {
    id: number
    identifier: number
    value: number
    expiresAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type VerificationMinAggregateInputType = {
    id?: true
    identifier?: true
    value?: true
    expiresAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type VerificationMaxAggregateInputType = {
    id?: true
    identifier?: true
    value?: true
    expiresAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type VerificationCountAggregateInputType = {
    id?: true
    identifier?: true
    value?: true
    expiresAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type VerificationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Verification to aggregate.
     */
    where?: VerificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Verifications to fetch.
     */
    orderBy?: VerificationOrderByWithRelationInput | VerificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VerificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Verifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Verifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Verifications
    **/
    _count?: true | VerificationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VerificationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VerificationMaxAggregateInputType
  }

  export type GetVerificationAggregateType<T extends VerificationAggregateArgs> = {
        [P in keyof T & keyof AggregateVerification]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVerification[P]>
      : GetScalarType<T[P], AggregateVerification[P]>
  }




  export type VerificationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VerificationWhereInput
    orderBy?: VerificationOrderByWithAggregationInput | VerificationOrderByWithAggregationInput[]
    by: VerificationScalarFieldEnum[] | VerificationScalarFieldEnum
    having?: VerificationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VerificationCountAggregateInputType | true
    _min?: VerificationMinAggregateInputType
    _max?: VerificationMaxAggregateInputType
  }

  export type VerificationGroupByOutputType = {
    id: string
    identifier: string
    value: string
    expiresAt: Date
    createdAt: Date
    updatedAt: Date
    _count: VerificationCountAggregateOutputType | null
    _min: VerificationMinAggregateOutputType | null
    _max: VerificationMaxAggregateOutputType | null
  }

  type GetVerificationGroupByPayload<T extends VerificationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VerificationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VerificationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VerificationGroupByOutputType[P]>
            : GetScalarType<T[P], VerificationGroupByOutputType[P]>
        }
      >
    >


  export type VerificationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    identifier?: boolean
    value?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["verification"]>

  export type VerificationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    identifier?: boolean
    value?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["verification"]>

  export type VerificationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    identifier?: boolean
    value?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["verification"]>

  export type VerificationSelectScalar = {
    id?: boolean
    identifier?: boolean
    value?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type VerificationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "identifier" | "value" | "expiresAt" | "createdAt" | "updatedAt", ExtArgs["result"]["verification"]>

  export type $VerificationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Verification"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      identifier: string
      value: string
      expiresAt: Date
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["verification"]>
    composites: {}
  }

  type VerificationGetPayload<S extends boolean | null | undefined | VerificationDefaultArgs> = $Result.GetResult<Prisma.$VerificationPayload, S>

  type VerificationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VerificationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VerificationCountAggregateInputType | true
    }

  export interface VerificationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Verification'], meta: { name: 'Verification' } }
    /**
     * Find zero or one Verification that matches the filter.
     * @param {VerificationFindUniqueArgs} args - Arguments to find a Verification
     * @example
     * // Get one Verification
     * const verification = await prisma.verification.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VerificationFindUniqueArgs>(args: SelectSubset<T, VerificationFindUniqueArgs<ExtArgs>>): Prisma__VerificationClient<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Verification that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VerificationFindUniqueOrThrowArgs} args - Arguments to find a Verification
     * @example
     * // Get one Verification
     * const verification = await prisma.verification.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VerificationFindUniqueOrThrowArgs>(args: SelectSubset<T, VerificationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VerificationClient<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Verification that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationFindFirstArgs} args - Arguments to find a Verification
     * @example
     * // Get one Verification
     * const verification = await prisma.verification.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VerificationFindFirstArgs>(args?: SelectSubset<T, VerificationFindFirstArgs<ExtArgs>>): Prisma__VerificationClient<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Verification that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationFindFirstOrThrowArgs} args - Arguments to find a Verification
     * @example
     * // Get one Verification
     * const verification = await prisma.verification.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VerificationFindFirstOrThrowArgs>(args?: SelectSubset<T, VerificationFindFirstOrThrowArgs<ExtArgs>>): Prisma__VerificationClient<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Verifications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Verifications
     * const verifications = await prisma.verification.findMany()
     * 
     * // Get first 10 Verifications
     * const verifications = await prisma.verification.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const verificationWithIdOnly = await prisma.verification.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VerificationFindManyArgs>(args?: SelectSubset<T, VerificationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Verification.
     * @param {VerificationCreateArgs} args - Arguments to create a Verification.
     * @example
     * // Create one Verification
     * const Verification = await prisma.verification.create({
     *   data: {
     *     // ... data to create a Verification
     *   }
     * })
     * 
     */
    create<T extends VerificationCreateArgs>(args: SelectSubset<T, VerificationCreateArgs<ExtArgs>>): Prisma__VerificationClient<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Verifications.
     * @param {VerificationCreateManyArgs} args - Arguments to create many Verifications.
     * @example
     * // Create many Verifications
     * const verification = await prisma.verification.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VerificationCreateManyArgs>(args?: SelectSubset<T, VerificationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Verifications and returns the data saved in the database.
     * @param {VerificationCreateManyAndReturnArgs} args - Arguments to create many Verifications.
     * @example
     * // Create many Verifications
     * const verification = await prisma.verification.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Verifications and only return the `id`
     * const verificationWithIdOnly = await prisma.verification.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VerificationCreateManyAndReturnArgs>(args?: SelectSubset<T, VerificationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Verification.
     * @param {VerificationDeleteArgs} args - Arguments to delete one Verification.
     * @example
     * // Delete one Verification
     * const Verification = await prisma.verification.delete({
     *   where: {
     *     // ... filter to delete one Verification
     *   }
     * })
     * 
     */
    delete<T extends VerificationDeleteArgs>(args: SelectSubset<T, VerificationDeleteArgs<ExtArgs>>): Prisma__VerificationClient<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Verification.
     * @param {VerificationUpdateArgs} args - Arguments to update one Verification.
     * @example
     * // Update one Verification
     * const verification = await prisma.verification.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VerificationUpdateArgs>(args: SelectSubset<T, VerificationUpdateArgs<ExtArgs>>): Prisma__VerificationClient<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Verifications.
     * @param {VerificationDeleteManyArgs} args - Arguments to filter Verifications to delete.
     * @example
     * // Delete a few Verifications
     * const { count } = await prisma.verification.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VerificationDeleteManyArgs>(args?: SelectSubset<T, VerificationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Verifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Verifications
     * const verification = await prisma.verification.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VerificationUpdateManyArgs>(args: SelectSubset<T, VerificationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Verifications and returns the data updated in the database.
     * @param {VerificationUpdateManyAndReturnArgs} args - Arguments to update many Verifications.
     * @example
     * // Update many Verifications
     * const verification = await prisma.verification.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Verifications and only return the `id`
     * const verificationWithIdOnly = await prisma.verification.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends VerificationUpdateManyAndReturnArgs>(args: SelectSubset<T, VerificationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Verification.
     * @param {VerificationUpsertArgs} args - Arguments to update or create a Verification.
     * @example
     * // Update or create a Verification
     * const verification = await prisma.verification.upsert({
     *   create: {
     *     // ... data to create a Verification
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Verification we want to update
     *   }
     * })
     */
    upsert<T extends VerificationUpsertArgs>(args: SelectSubset<T, VerificationUpsertArgs<ExtArgs>>): Prisma__VerificationClient<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Verifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationCountArgs} args - Arguments to filter Verifications to count.
     * @example
     * // Count the number of Verifications
     * const count = await prisma.verification.count({
     *   where: {
     *     // ... the filter for the Verifications we want to count
     *   }
     * })
    **/
    count<T extends VerificationCountArgs>(
      args?: Subset<T, VerificationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VerificationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Verification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends VerificationAggregateArgs>(args: Subset<T, VerificationAggregateArgs>): Prisma.PrismaPromise<GetVerificationAggregateType<T>>

    /**
     * Group by Verification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends VerificationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VerificationGroupByArgs['orderBy'] }
        : { orderBy?: VerificationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, VerificationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVerificationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Verification model
   */
  readonly fields: VerificationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Verification.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VerificationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Verification model
   */
  interface VerificationFieldRefs {
    readonly id: FieldRef<"Verification", 'String'>
    readonly identifier: FieldRef<"Verification", 'String'>
    readonly value: FieldRef<"Verification", 'String'>
    readonly expiresAt: FieldRef<"Verification", 'DateTime'>
    readonly createdAt: FieldRef<"Verification", 'DateTime'>
    readonly updatedAt: FieldRef<"Verification", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Verification findUnique
   */
  export type VerificationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * Filter, which Verification to fetch.
     */
    where: VerificationWhereUniqueInput
  }

  /**
   * Verification findUniqueOrThrow
   */
  export type VerificationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * Filter, which Verification to fetch.
     */
    where: VerificationWhereUniqueInput
  }

  /**
   * Verification findFirst
   */
  export type VerificationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * Filter, which Verification to fetch.
     */
    where?: VerificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Verifications to fetch.
     */
    orderBy?: VerificationOrderByWithRelationInput | VerificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Verifications.
     */
    cursor?: VerificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Verifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Verifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Verifications.
     */
    distinct?: VerificationScalarFieldEnum | VerificationScalarFieldEnum[]
  }

  /**
   * Verification findFirstOrThrow
   */
  export type VerificationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * Filter, which Verification to fetch.
     */
    where?: VerificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Verifications to fetch.
     */
    orderBy?: VerificationOrderByWithRelationInput | VerificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Verifications.
     */
    cursor?: VerificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Verifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Verifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Verifications.
     */
    distinct?: VerificationScalarFieldEnum | VerificationScalarFieldEnum[]
  }

  /**
   * Verification findMany
   */
  export type VerificationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * Filter, which Verifications to fetch.
     */
    where?: VerificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Verifications to fetch.
     */
    orderBy?: VerificationOrderByWithRelationInput | VerificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Verifications.
     */
    cursor?: VerificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Verifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Verifications.
     */
    skip?: number
    distinct?: VerificationScalarFieldEnum | VerificationScalarFieldEnum[]
  }

  /**
   * Verification create
   */
  export type VerificationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * The data needed to create a Verification.
     */
    data: XOR<VerificationCreateInput, VerificationUncheckedCreateInput>
  }

  /**
   * Verification createMany
   */
  export type VerificationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Verifications.
     */
    data: VerificationCreateManyInput | VerificationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Verification createManyAndReturn
   */
  export type VerificationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * The data used to create many Verifications.
     */
    data: VerificationCreateManyInput | VerificationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Verification update
   */
  export type VerificationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * The data needed to update a Verification.
     */
    data: XOR<VerificationUpdateInput, VerificationUncheckedUpdateInput>
    /**
     * Choose, which Verification to update.
     */
    where: VerificationWhereUniqueInput
  }

  /**
   * Verification updateMany
   */
  export type VerificationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Verifications.
     */
    data: XOR<VerificationUpdateManyMutationInput, VerificationUncheckedUpdateManyInput>
    /**
     * Filter which Verifications to update
     */
    where?: VerificationWhereInput
    /**
     * Limit how many Verifications to update.
     */
    limit?: number
  }

  /**
   * Verification updateManyAndReturn
   */
  export type VerificationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * The data used to update Verifications.
     */
    data: XOR<VerificationUpdateManyMutationInput, VerificationUncheckedUpdateManyInput>
    /**
     * Filter which Verifications to update
     */
    where?: VerificationWhereInput
    /**
     * Limit how many Verifications to update.
     */
    limit?: number
  }

  /**
   * Verification upsert
   */
  export type VerificationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * The filter to search for the Verification to update in case it exists.
     */
    where: VerificationWhereUniqueInput
    /**
     * In case the Verification found by the `where` argument doesn't exist, create a new Verification with this data.
     */
    create: XOR<VerificationCreateInput, VerificationUncheckedCreateInput>
    /**
     * In case the Verification was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VerificationUpdateInput, VerificationUncheckedUpdateInput>
  }

  /**
   * Verification delete
   */
  export type VerificationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * Filter which Verification to delete.
     */
    where: VerificationWhereUniqueInput
  }

  /**
   * Verification deleteMany
   */
  export type VerificationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Verifications to delete
     */
    where?: VerificationWhereInput
    /**
     * Limit how many Verifications to delete.
     */
    limit?: number
  }

  /**
   * Verification without action
   */
  export type VerificationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
  }


  /**
   * Model Signalements
   */

  export type AggregateSignalements = {
    _count: SignalementsCountAggregateOutputType | null
    _min: SignalementsMinAggregateOutputType | null
    _max: SignalementsMaxAggregateOutputType | null
  }

  export type SignalementsMinAggregateOutputType = {
    id: string | null
    sujet: string | null
    message: string | null
    cree_le: Date | null
    modifie_le: Date | null
    userId: string | null
  }

  export type SignalementsMaxAggregateOutputType = {
    id: string | null
    sujet: string | null
    message: string | null
    cree_le: Date | null
    modifie_le: Date | null
    userId: string | null
  }

  export type SignalementsCountAggregateOutputType = {
    id: number
    sujet: number
    message: number
    cree_le: number
    modifie_le: number
    userId: number
    _all: number
  }


  export type SignalementsMinAggregateInputType = {
    id?: true
    sujet?: true
    message?: true
    cree_le?: true
    modifie_le?: true
    userId?: true
  }

  export type SignalementsMaxAggregateInputType = {
    id?: true
    sujet?: true
    message?: true
    cree_le?: true
    modifie_le?: true
    userId?: true
  }

  export type SignalementsCountAggregateInputType = {
    id?: true
    sujet?: true
    message?: true
    cree_le?: true
    modifie_le?: true
    userId?: true
    _all?: true
  }

  export type SignalementsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Signalements to aggregate.
     */
    where?: SignalementsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Signalements to fetch.
     */
    orderBy?: SignalementsOrderByWithRelationInput | SignalementsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SignalementsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Signalements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Signalements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Signalements
    **/
    _count?: true | SignalementsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SignalementsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SignalementsMaxAggregateInputType
  }

  export type GetSignalementsAggregateType<T extends SignalementsAggregateArgs> = {
        [P in keyof T & keyof AggregateSignalements]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSignalements[P]>
      : GetScalarType<T[P], AggregateSignalements[P]>
  }




  export type SignalementsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SignalementsWhereInput
    orderBy?: SignalementsOrderByWithAggregationInput | SignalementsOrderByWithAggregationInput[]
    by: SignalementsScalarFieldEnum[] | SignalementsScalarFieldEnum
    having?: SignalementsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SignalementsCountAggregateInputType | true
    _min?: SignalementsMinAggregateInputType
    _max?: SignalementsMaxAggregateInputType
  }

  export type SignalementsGroupByOutputType = {
    id: string
    sujet: string | null
    message: string
    cree_le: Date
    modifie_le: Date
    userId: string
    _count: SignalementsCountAggregateOutputType | null
    _min: SignalementsMinAggregateOutputType | null
    _max: SignalementsMaxAggregateOutputType | null
  }

  type GetSignalementsGroupByPayload<T extends SignalementsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SignalementsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SignalementsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SignalementsGroupByOutputType[P]>
            : GetScalarType<T[P], SignalementsGroupByOutputType[P]>
        }
      >
    >


  export type SignalementsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sujet?: boolean
    message?: boolean
    cree_le?: boolean
    modifie_le?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["signalements"]>

  export type SignalementsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sujet?: boolean
    message?: boolean
    cree_le?: boolean
    modifie_le?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["signalements"]>

  export type SignalementsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sujet?: boolean
    message?: boolean
    cree_le?: boolean
    modifie_le?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["signalements"]>

  export type SignalementsSelectScalar = {
    id?: boolean
    sujet?: boolean
    message?: boolean
    cree_le?: boolean
    modifie_le?: boolean
    userId?: boolean
  }

  export type SignalementsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "sujet" | "message" | "cree_le" | "modifie_le" | "userId", ExtArgs["result"]["signalements"]>
  export type SignalementsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SignalementsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SignalementsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $SignalementsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Signalements"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      sujet: string | null
      message: string
      cree_le: Date
      modifie_le: Date
      userId: string
    }, ExtArgs["result"]["signalements"]>
    composites: {}
  }

  type SignalementsGetPayload<S extends boolean | null | undefined | SignalementsDefaultArgs> = $Result.GetResult<Prisma.$SignalementsPayload, S>

  type SignalementsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SignalementsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SignalementsCountAggregateInputType | true
    }

  export interface SignalementsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Signalements'], meta: { name: 'Signalements' } }
    /**
     * Find zero or one Signalements that matches the filter.
     * @param {SignalementsFindUniqueArgs} args - Arguments to find a Signalements
     * @example
     * // Get one Signalements
     * const signalements = await prisma.signalements.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SignalementsFindUniqueArgs>(args: SelectSubset<T, SignalementsFindUniqueArgs<ExtArgs>>): Prisma__SignalementsClient<$Result.GetResult<Prisma.$SignalementsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Signalements that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SignalementsFindUniqueOrThrowArgs} args - Arguments to find a Signalements
     * @example
     * // Get one Signalements
     * const signalements = await prisma.signalements.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SignalementsFindUniqueOrThrowArgs>(args: SelectSubset<T, SignalementsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SignalementsClient<$Result.GetResult<Prisma.$SignalementsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Signalements that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SignalementsFindFirstArgs} args - Arguments to find a Signalements
     * @example
     * // Get one Signalements
     * const signalements = await prisma.signalements.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SignalementsFindFirstArgs>(args?: SelectSubset<T, SignalementsFindFirstArgs<ExtArgs>>): Prisma__SignalementsClient<$Result.GetResult<Prisma.$SignalementsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Signalements that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SignalementsFindFirstOrThrowArgs} args - Arguments to find a Signalements
     * @example
     * // Get one Signalements
     * const signalements = await prisma.signalements.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SignalementsFindFirstOrThrowArgs>(args?: SelectSubset<T, SignalementsFindFirstOrThrowArgs<ExtArgs>>): Prisma__SignalementsClient<$Result.GetResult<Prisma.$SignalementsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Signalements that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SignalementsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Signalements
     * const signalements = await prisma.signalements.findMany()
     * 
     * // Get first 10 Signalements
     * const signalements = await prisma.signalements.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const signalementsWithIdOnly = await prisma.signalements.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SignalementsFindManyArgs>(args?: SelectSubset<T, SignalementsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SignalementsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Signalements.
     * @param {SignalementsCreateArgs} args - Arguments to create a Signalements.
     * @example
     * // Create one Signalements
     * const Signalements = await prisma.signalements.create({
     *   data: {
     *     // ... data to create a Signalements
     *   }
     * })
     * 
     */
    create<T extends SignalementsCreateArgs>(args: SelectSubset<T, SignalementsCreateArgs<ExtArgs>>): Prisma__SignalementsClient<$Result.GetResult<Prisma.$SignalementsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Signalements.
     * @param {SignalementsCreateManyArgs} args - Arguments to create many Signalements.
     * @example
     * // Create many Signalements
     * const signalements = await prisma.signalements.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SignalementsCreateManyArgs>(args?: SelectSubset<T, SignalementsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Signalements and returns the data saved in the database.
     * @param {SignalementsCreateManyAndReturnArgs} args - Arguments to create many Signalements.
     * @example
     * // Create many Signalements
     * const signalements = await prisma.signalements.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Signalements and only return the `id`
     * const signalementsWithIdOnly = await prisma.signalements.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SignalementsCreateManyAndReturnArgs>(args?: SelectSubset<T, SignalementsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SignalementsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Signalements.
     * @param {SignalementsDeleteArgs} args - Arguments to delete one Signalements.
     * @example
     * // Delete one Signalements
     * const Signalements = await prisma.signalements.delete({
     *   where: {
     *     // ... filter to delete one Signalements
     *   }
     * })
     * 
     */
    delete<T extends SignalementsDeleteArgs>(args: SelectSubset<T, SignalementsDeleteArgs<ExtArgs>>): Prisma__SignalementsClient<$Result.GetResult<Prisma.$SignalementsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Signalements.
     * @param {SignalementsUpdateArgs} args - Arguments to update one Signalements.
     * @example
     * // Update one Signalements
     * const signalements = await prisma.signalements.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SignalementsUpdateArgs>(args: SelectSubset<T, SignalementsUpdateArgs<ExtArgs>>): Prisma__SignalementsClient<$Result.GetResult<Prisma.$SignalementsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Signalements.
     * @param {SignalementsDeleteManyArgs} args - Arguments to filter Signalements to delete.
     * @example
     * // Delete a few Signalements
     * const { count } = await prisma.signalements.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SignalementsDeleteManyArgs>(args?: SelectSubset<T, SignalementsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Signalements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SignalementsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Signalements
     * const signalements = await prisma.signalements.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SignalementsUpdateManyArgs>(args: SelectSubset<T, SignalementsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Signalements and returns the data updated in the database.
     * @param {SignalementsUpdateManyAndReturnArgs} args - Arguments to update many Signalements.
     * @example
     * // Update many Signalements
     * const signalements = await prisma.signalements.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Signalements and only return the `id`
     * const signalementsWithIdOnly = await prisma.signalements.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SignalementsUpdateManyAndReturnArgs>(args: SelectSubset<T, SignalementsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SignalementsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Signalements.
     * @param {SignalementsUpsertArgs} args - Arguments to update or create a Signalements.
     * @example
     * // Update or create a Signalements
     * const signalements = await prisma.signalements.upsert({
     *   create: {
     *     // ... data to create a Signalements
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Signalements we want to update
     *   }
     * })
     */
    upsert<T extends SignalementsUpsertArgs>(args: SelectSubset<T, SignalementsUpsertArgs<ExtArgs>>): Prisma__SignalementsClient<$Result.GetResult<Prisma.$SignalementsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Signalements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SignalementsCountArgs} args - Arguments to filter Signalements to count.
     * @example
     * // Count the number of Signalements
     * const count = await prisma.signalements.count({
     *   where: {
     *     // ... the filter for the Signalements we want to count
     *   }
     * })
    **/
    count<T extends SignalementsCountArgs>(
      args?: Subset<T, SignalementsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SignalementsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Signalements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SignalementsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SignalementsAggregateArgs>(args: Subset<T, SignalementsAggregateArgs>): Prisma.PrismaPromise<GetSignalementsAggregateType<T>>

    /**
     * Group by Signalements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SignalementsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SignalementsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SignalementsGroupByArgs['orderBy'] }
        : { orderBy?: SignalementsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SignalementsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSignalementsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Signalements model
   */
  readonly fields: SignalementsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Signalements.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SignalementsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Signalements model
   */
  interface SignalementsFieldRefs {
    readonly id: FieldRef<"Signalements", 'String'>
    readonly sujet: FieldRef<"Signalements", 'String'>
    readonly message: FieldRef<"Signalements", 'String'>
    readonly cree_le: FieldRef<"Signalements", 'DateTime'>
    readonly modifie_le: FieldRef<"Signalements", 'DateTime'>
    readonly userId: FieldRef<"Signalements", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Signalements findUnique
   */
  export type SignalementsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Signalements
     */
    select?: SignalementsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Signalements
     */
    omit?: SignalementsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SignalementsInclude<ExtArgs> | null
    /**
     * Filter, which Signalements to fetch.
     */
    where: SignalementsWhereUniqueInput
  }

  /**
   * Signalements findUniqueOrThrow
   */
  export type SignalementsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Signalements
     */
    select?: SignalementsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Signalements
     */
    omit?: SignalementsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SignalementsInclude<ExtArgs> | null
    /**
     * Filter, which Signalements to fetch.
     */
    where: SignalementsWhereUniqueInput
  }

  /**
   * Signalements findFirst
   */
  export type SignalementsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Signalements
     */
    select?: SignalementsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Signalements
     */
    omit?: SignalementsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SignalementsInclude<ExtArgs> | null
    /**
     * Filter, which Signalements to fetch.
     */
    where?: SignalementsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Signalements to fetch.
     */
    orderBy?: SignalementsOrderByWithRelationInput | SignalementsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Signalements.
     */
    cursor?: SignalementsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Signalements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Signalements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Signalements.
     */
    distinct?: SignalementsScalarFieldEnum | SignalementsScalarFieldEnum[]
  }

  /**
   * Signalements findFirstOrThrow
   */
  export type SignalementsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Signalements
     */
    select?: SignalementsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Signalements
     */
    omit?: SignalementsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SignalementsInclude<ExtArgs> | null
    /**
     * Filter, which Signalements to fetch.
     */
    where?: SignalementsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Signalements to fetch.
     */
    orderBy?: SignalementsOrderByWithRelationInput | SignalementsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Signalements.
     */
    cursor?: SignalementsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Signalements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Signalements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Signalements.
     */
    distinct?: SignalementsScalarFieldEnum | SignalementsScalarFieldEnum[]
  }

  /**
   * Signalements findMany
   */
  export type SignalementsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Signalements
     */
    select?: SignalementsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Signalements
     */
    omit?: SignalementsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SignalementsInclude<ExtArgs> | null
    /**
     * Filter, which Signalements to fetch.
     */
    where?: SignalementsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Signalements to fetch.
     */
    orderBy?: SignalementsOrderByWithRelationInput | SignalementsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Signalements.
     */
    cursor?: SignalementsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Signalements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Signalements.
     */
    skip?: number
    distinct?: SignalementsScalarFieldEnum | SignalementsScalarFieldEnum[]
  }

  /**
   * Signalements create
   */
  export type SignalementsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Signalements
     */
    select?: SignalementsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Signalements
     */
    omit?: SignalementsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SignalementsInclude<ExtArgs> | null
    /**
     * The data needed to create a Signalements.
     */
    data: XOR<SignalementsCreateInput, SignalementsUncheckedCreateInput>
  }

  /**
   * Signalements createMany
   */
  export type SignalementsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Signalements.
     */
    data: SignalementsCreateManyInput | SignalementsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Signalements createManyAndReturn
   */
  export type SignalementsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Signalements
     */
    select?: SignalementsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Signalements
     */
    omit?: SignalementsOmit<ExtArgs> | null
    /**
     * The data used to create many Signalements.
     */
    data: SignalementsCreateManyInput | SignalementsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SignalementsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Signalements update
   */
  export type SignalementsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Signalements
     */
    select?: SignalementsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Signalements
     */
    omit?: SignalementsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SignalementsInclude<ExtArgs> | null
    /**
     * The data needed to update a Signalements.
     */
    data: XOR<SignalementsUpdateInput, SignalementsUncheckedUpdateInput>
    /**
     * Choose, which Signalements to update.
     */
    where: SignalementsWhereUniqueInput
  }

  /**
   * Signalements updateMany
   */
  export type SignalementsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Signalements.
     */
    data: XOR<SignalementsUpdateManyMutationInput, SignalementsUncheckedUpdateManyInput>
    /**
     * Filter which Signalements to update
     */
    where?: SignalementsWhereInput
    /**
     * Limit how many Signalements to update.
     */
    limit?: number
  }

  /**
   * Signalements updateManyAndReturn
   */
  export type SignalementsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Signalements
     */
    select?: SignalementsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Signalements
     */
    omit?: SignalementsOmit<ExtArgs> | null
    /**
     * The data used to update Signalements.
     */
    data: XOR<SignalementsUpdateManyMutationInput, SignalementsUncheckedUpdateManyInput>
    /**
     * Filter which Signalements to update
     */
    where?: SignalementsWhereInput
    /**
     * Limit how many Signalements to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SignalementsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Signalements upsert
   */
  export type SignalementsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Signalements
     */
    select?: SignalementsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Signalements
     */
    omit?: SignalementsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SignalementsInclude<ExtArgs> | null
    /**
     * The filter to search for the Signalements to update in case it exists.
     */
    where: SignalementsWhereUniqueInput
    /**
     * In case the Signalements found by the `where` argument doesn't exist, create a new Signalements with this data.
     */
    create: XOR<SignalementsCreateInput, SignalementsUncheckedCreateInput>
    /**
     * In case the Signalements was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SignalementsUpdateInput, SignalementsUncheckedUpdateInput>
  }

  /**
   * Signalements delete
   */
  export type SignalementsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Signalements
     */
    select?: SignalementsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Signalements
     */
    omit?: SignalementsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SignalementsInclude<ExtArgs> | null
    /**
     * Filter which Signalements to delete.
     */
    where: SignalementsWhereUniqueInput
  }

  /**
   * Signalements deleteMany
   */
  export type SignalementsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Signalements to delete
     */
    where?: SignalementsWhereInput
    /**
     * Limit how many Signalements to delete.
     */
    limit?: number
  }

  /**
   * Signalements without action
   */
  export type SignalementsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Signalements
     */
    select?: SignalementsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Signalements
     */
    omit?: SignalementsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SignalementsInclude<ExtArgs> | null
  }


  /**
   * Model Patients
   */

  export type AggregatePatients = {
    _count: PatientsCountAggregateOutputType | null
    _min: PatientsMinAggregateOutputType | null
    _max: PatientsMaxAggregateOutputType | null
  }

  export type PatientsMinAggregateOutputType = {
    id_patient: string | null
    cree_le: Date | null
    modifie_le: Date | null
    userId: string | null
  }

  export type PatientsMaxAggregateOutputType = {
    id_patient: string | null
    cree_le: Date | null
    modifie_le: Date | null
    userId: string | null
  }

  export type PatientsCountAggregateOutputType = {
    id_patient: number
    cree_le: number
    modifie_le: number
    userId: number
    _all: number
  }


  export type PatientsMinAggregateInputType = {
    id_patient?: true
    cree_le?: true
    modifie_le?: true
    userId?: true
  }

  export type PatientsMaxAggregateInputType = {
    id_patient?: true
    cree_le?: true
    modifie_le?: true
    userId?: true
  }

  export type PatientsCountAggregateInputType = {
    id_patient?: true
    cree_le?: true
    modifie_le?: true
    userId?: true
    _all?: true
  }

  export type PatientsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Patients to aggregate.
     */
    where?: PatientsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Patients to fetch.
     */
    orderBy?: PatientsOrderByWithRelationInput | PatientsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PatientsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Patients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Patients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Patients
    **/
    _count?: true | PatientsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PatientsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PatientsMaxAggregateInputType
  }

  export type GetPatientsAggregateType<T extends PatientsAggregateArgs> = {
        [P in keyof T & keyof AggregatePatients]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePatients[P]>
      : GetScalarType<T[P], AggregatePatients[P]>
  }




  export type PatientsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PatientsWhereInput
    orderBy?: PatientsOrderByWithAggregationInput | PatientsOrderByWithAggregationInput[]
    by: PatientsScalarFieldEnum[] | PatientsScalarFieldEnum
    having?: PatientsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PatientsCountAggregateInputType | true
    _min?: PatientsMinAggregateInputType
    _max?: PatientsMaxAggregateInputType
  }

  export type PatientsGroupByOutputType = {
    id_patient: string
    cree_le: Date
    modifie_le: Date
    userId: string
    _count: PatientsCountAggregateOutputType | null
    _min: PatientsMinAggregateOutputType | null
    _max: PatientsMaxAggregateOutputType | null
  }

  type GetPatientsGroupByPayload<T extends PatientsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PatientsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PatientsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PatientsGroupByOutputType[P]>
            : GetScalarType<T[P], PatientsGroupByOutputType[P]>
        }
      >
    >


  export type PatientsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_patient?: boolean
    cree_le?: boolean
    modifie_le?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    rendezVous?: boolean | Patients$rendezVousArgs<ExtArgs>
    consultations?: boolean | Patients$consultationsArgs<ExtArgs>
    _count?: boolean | PatientsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["patients"]>

  export type PatientsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_patient?: boolean
    cree_le?: boolean
    modifie_le?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["patients"]>

  export type PatientsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_patient?: boolean
    cree_le?: boolean
    modifie_le?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["patients"]>

  export type PatientsSelectScalar = {
    id_patient?: boolean
    cree_le?: boolean
    modifie_le?: boolean
    userId?: boolean
  }

  export type PatientsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_patient" | "cree_le" | "modifie_le" | "userId", ExtArgs["result"]["patients"]>
  export type PatientsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    rendezVous?: boolean | Patients$rendezVousArgs<ExtArgs>
    consultations?: boolean | Patients$consultationsArgs<ExtArgs>
    _count?: boolean | PatientsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PatientsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type PatientsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $PatientsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Patients"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      rendezVous: Prisma.$RendezVousPayload<ExtArgs>[]
      consultations: Prisma.$ConsultationsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_patient: string
      cree_le: Date
      modifie_le: Date
      userId: string
    }, ExtArgs["result"]["patients"]>
    composites: {}
  }

  type PatientsGetPayload<S extends boolean | null | undefined | PatientsDefaultArgs> = $Result.GetResult<Prisma.$PatientsPayload, S>

  type PatientsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PatientsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PatientsCountAggregateInputType | true
    }

  export interface PatientsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Patients'], meta: { name: 'Patients' } }
    /**
     * Find zero or one Patients that matches the filter.
     * @param {PatientsFindUniqueArgs} args - Arguments to find a Patients
     * @example
     * // Get one Patients
     * const patients = await prisma.patients.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PatientsFindUniqueArgs>(args: SelectSubset<T, PatientsFindUniqueArgs<ExtArgs>>): Prisma__PatientsClient<$Result.GetResult<Prisma.$PatientsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Patients that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PatientsFindUniqueOrThrowArgs} args - Arguments to find a Patients
     * @example
     * // Get one Patients
     * const patients = await prisma.patients.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PatientsFindUniqueOrThrowArgs>(args: SelectSubset<T, PatientsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PatientsClient<$Result.GetResult<Prisma.$PatientsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Patients that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientsFindFirstArgs} args - Arguments to find a Patients
     * @example
     * // Get one Patients
     * const patients = await prisma.patients.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PatientsFindFirstArgs>(args?: SelectSubset<T, PatientsFindFirstArgs<ExtArgs>>): Prisma__PatientsClient<$Result.GetResult<Prisma.$PatientsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Patients that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientsFindFirstOrThrowArgs} args - Arguments to find a Patients
     * @example
     * // Get one Patients
     * const patients = await prisma.patients.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PatientsFindFirstOrThrowArgs>(args?: SelectSubset<T, PatientsFindFirstOrThrowArgs<ExtArgs>>): Prisma__PatientsClient<$Result.GetResult<Prisma.$PatientsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Patients that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Patients
     * const patients = await prisma.patients.findMany()
     * 
     * // Get first 10 Patients
     * const patients = await prisma.patients.findMany({ take: 10 })
     * 
     * // Only select the `id_patient`
     * const patientsWithId_patientOnly = await prisma.patients.findMany({ select: { id_patient: true } })
     * 
     */
    findMany<T extends PatientsFindManyArgs>(args?: SelectSubset<T, PatientsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PatientsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Patients.
     * @param {PatientsCreateArgs} args - Arguments to create a Patients.
     * @example
     * // Create one Patients
     * const Patients = await prisma.patients.create({
     *   data: {
     *     // ... data to create a Patients
     *   }
     * })
     * 
     */
    create<T extends PatientsCreateArgs>(args: SelectSubset<T, PatientsCreateArgs<ExtArgs>>): Prisma__PatientsClient<$Result.GetResult<Prisma.$PatientsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Patients.
     * @param {PatientsCreateManyArgs} args - Arguments to create many Patients.
     * @example
     * // Create many Patients
     * const patients = await prisma.patients.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PatientsCreateManyArgs>(args?: SelectSubset<T, PatientsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Patients and returns the data saved in the database.
     * @param {PatientsCreateManyAndReturnArgs} args - Arguments to create many Patients.
     * @example
     * // Create many Patients
     * const patients = await prisma.patients.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Patients and only return the `id_patient`
     * const patientsWithId_patientOnly = await prisma.patients.createManyAndReturn({
     *   select: { id_patient: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PatientsCreateManyAndReturnArgs>(args?: SelectSubset<T, PatientsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PatientsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Patients.
     * @param {PatientsDeleteArgs} args - Arguments to delete one Patients.
     * @example
     * // Delete one Patients
     * const Patients = await prisma.patients.delete({
     *   where: {
     *     // ... filter to delete one Patients
     *   }
     * })
     * 
     */
    delete<T extends PatientsDeleteArgs>(args: SelectSubset<T, PatientsDeleteArgs<ExtArgs>>): Prisma__PatientsClient<$Result.GetResult<Prisma.$PatientsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Patients.
     * @param {PatientsUpdateArgs} args - Arguments to update one Patients.
     * @example
     * // Update one Patients
     * const patients = await prisma.patients.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PatientsUpdateArgs>(args: SelectSubset<T, PatientsUpdateArgs<ExtArgs>>): Prisma__PatientsClient<$Result.GetResult<Prisma.$PatientsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Patients.
     * @param {PatientsDeleteManyArgs} args - Arguments to filter Patients to delete.
     * @example
     * // Delete a few Patients
     * const { count } = await prisma.patients.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PatientsDeleteManyArgs>(args?: SelectSubset<T, PatientsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Patients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Patients
     * const patients = await prisma.patients.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PatientsUpdateManyArgs>(args: SelectSubset<T, PatientsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Patients and returns the data updated in the database.
     * @param {PatientsUpdateManyAndReturnArgs} args - Arguments to update many Patients.
     * @example
     * // Update many Patients
     * const patients = await prisma.patients.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Patients and only return the `id_patient`
     * const patientsWithId_patientOnly = await prisma.patients.updateManyAndReturn({
     *   select: { id_patient: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PatientsUpdateManyAndReturnArgs>(args: SelectSubset<T, PatientsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PatientsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Patients.
     * @param {PatientsUpsertArgs} args - Arguments to update or create a Patients.
     * @example
     * // Update or create a Patients
     * const patients = await prisma.patients.upsert({
     *   create: {
     *     // ... data to create a Patients
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Patients we want to update
     *   }
     * })
     */
    upsert<T extends PatientsUpsertArgs>(args: SelectSubset<T, PatientsUpsertArgs<ExtArgs>>): Prisma__PatientsClient<$Result.GetResult<Prisma.$PatientsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Patients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientsCountArgs} args - Arguments to filter Patients to count.
     * @example
     * // Count the number of Patients
     * const count = await prisma.patients.count({
     *   where: {
     *     // ... the filter for the Patients we want to count
     *   }
     * })
    **/
    count<T extends PatientsCountArgs>(
      args?: Subset<T, PatientsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PatientsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Patients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PatientsAggregateArgs>(args: Subset<T, PatientsAggregateArgs>): Prisma.PrismaPromise<GetPatientsAggregateType<T>>

    /**
     * Group by Patients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PatientsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PatientsGroupByArgs['orderBy'] }
        : { orderBy?: PatientsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PatientsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPatientsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Patients model
   */
  readonly fields: PatientsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Patients.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PatientsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    rendezVous<T extends Patients$rendezVousArgs<ExtArgs> = {}>(args?: Subset<T, Patients$rendezVousArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RendezVousPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    consultations<T extends Patients$consultationsArgs<ExtArgs> = {}>(args?: Subset<T, Patients$consultationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConsultationsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Patients model
   */
  interface PatientsFieldRefs {
    readonly id_patient: FieldRef<"Patients", 'String'>
    readonly cree_le: FieldRef<"Patients", 'DateTime'>
    readonly modifie_le: FieldRef<"Patients", 'DateTime'>
    readonly userId: FieldRef<"Patients", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Patients findUnique
   */
  export type PatientsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patients
     */
    select?: PatientsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patients
     */
    omit?: PatientsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientsInclude<ExtArgs> | null
    /**
     * Filter, which Patients to fetch.
     */
    where: PatientsWhereUniqueInput
  }

  /**
   * Patients findUniqueOrThrow
   */
  export type PatientsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patients
     */
    select?: PatientsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patients
     */
    omit?: PatientsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientsInclude<ExtArgs> | null
    /**
     * Filter, which Patients to fetch.
     */
    where: PatientsWhereUniqueInput
  }

  /**
   * Patients findFirst
   */
  export type PatientsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patients
     */
    select?: PatientsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patients
     */
    omit?: PatientsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientsInclude<ExtArgs> | null
    /**
     * Filter, which Patients to fetch.
     */
    where?: PatientsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Patients to fetch.
     */
    orderBy?: PatientsOrderByWithRelationInput | PatientsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Patients.
     */
    cursor?: PatientsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Patients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Patients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Patients.
     */
    distinct?: PatientsScalarFieldEnum | PatientsScalarFieldEnum[]
  }

  /**
   * Patients findFirstOrThrow
   */
  export type PatientsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patients
     */
    select?: PatientsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patients
     */
    omit?: PatientsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientsInclude<ExtArgs> | null
    /**
     * Filter, which Patients to fetch.
     */
    where?: PatientsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Patients to fetch.
     */
    orderBy?: PatientsOrderByWithRelationInput | PatientsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Patients.
     */
    cursor?: PatientsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Patients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Patients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Patients.
     */
    distinct?: PatientsScalarFieldEnum | PatientsScalarFieldEnum[]
  }

  /**
   * Patients findMany
   */
  export type PatientsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patients
     */
    select?: PatientsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patients
     */
    omit?: PatientsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientsInclude<ExtArgs> | null
    /**
     * Filter, which Patients to fetch.
     */
    where?: PatientsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Patients to fetch.
     */
    orderBy?: PatientsOrderByWithRelationInput | PatientsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Patients.
     */
    cursor?: PatientsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Patients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Patients.
     */
    skip?: number
    distinct?: PatientsScalarFieldEnum | PatientsScalarFieldEnum[]
  }

  /**
   * Patients create
   */
  export type PatientsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patients
     */
    select?: PatientsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patients
     */
    omit?: PatientsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientsInclude<ExtArgs> | null
    /**
     * The data needed to create a Patients.
     */
    data: XOR<PatientsCreateInput, PatientsUncheckedCreateInput>
  }

  /**
   * Patients createMany
   */
  export type PatientsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Patients.
     */
    data: PatientsCreateManyInput | PatientsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Patients createManyAndReturn
   */
  export type PatientsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patients
     */
    select?: PatientsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Patients
     */
    omit?: PatientsOmit<ExtArgs> | null
    /**
     * The data used to create many Patients.
     */
    data: PatientsCreateManyInput | PatientsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Patients update
   */
  export type PatientsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patients
     */
    select?: PatientsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patients
     */
    omit?: PatientsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientsInclude<ExtArgs> | null
    /**
     * The data needed to update a Patients.
     */
    data: XOR<PatientsUpdateInput, PatientsUncheckedUpdateInput>
    /**
     * Choose, which Patients to update.
     */
    where: PatientsWhereUniqueInput
  }

  /**
   * Patients updateMany
   */
  export type PatientsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Patients.
     */
    data: XOR<PatientsUpdateManyMutationInput, PatientsUncheckedUpdateManyInput>
    /**
     * Filter which Patients to update
     */
    where?: PatientsWhereInput
    /**
     * Limit how many Patients to update.
     */
    limit?: number
  }

  /**
   * Patients updateManyAndReturn
   */
  export type PatientsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patients
     */
    select?: PatientsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Patients
     */
    omit?: PatientsOmit<ExtArgs> | null
    /**
     * The data used to update Patients.
     */
    data: XOR<PatientsUpdateManyMutationInput, PatientsUncheckedUpdateManyInput>
    /**
     * Filter which Patients to update
     */
    where?: PatientsWhereInput
    /**
     * Limit how many Patients to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Patients upsert
   */
  export type PatientsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patients
     */
    select?: PatientsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patients
     */
    omit?: PatientsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientsInclude<ExtArgs> | null
    /**
     * The filter to search for the Patients to update in case it exists.
     */
    where: PatientsWhereUniqueInput
    /**
     * In case the Patients found by the `where` argument doesn't exist, create a new Patients with this data.
     */
    create: XOR<PatientsCreateInput, PatientsUncheckedCreateInput>
    /**
     * In case the Patients was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PatientsUpdateInput, PatientsUncheckedUpdateInput>
  }

  /**
   * Patients delete
   */
  export type PatientsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patients
     */
    select?: PatientsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patients
     */
    omit?: PatientsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientsInclude<ExtArgs> | null
    /**
     * Filter which Patients to delete.
     */
    where: PatientsWhereUniqueInput
  }

  /**
   * Patients deleteMany
   */
  export type PatientsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Patients to delete
     */
    where?: PatientsWhereInput
    /**
     * Limit how many Patients to delete.
     */
    limit?: number
  }

  /**
   * Patients.rendezVous
   */
  export type Patients$rendezVousArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RendezVous
     */
    select?: RendezVousSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RendezVous
     */
    omit?: RendezVousOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RendezVousInclude<ExtArgs> | null
    where?: RendezVousWhereInput
    orderBy?: RendezVousOrderByWithRelationInput | RendezVousOrderByWithRelationInput[]
    cursor?: RendezVousWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RendezVousScalarFieldEnum | RendezVousScalarFieldEnum[]
  }

  /**
   * Patients.consultations
   */
  export type Patients$consultationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Consultations
     */
    select?: ConsultationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Consultations
     */
    omit?: ConsultationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsultationsInclude<ExtArgs> | null
    where?: ConsultationsWhereInput
    orderBy?: ConsultationsOrderByWithRelationInput | ConsultationsOrderByWithRelationInput[]
    cursor?: ConsultationsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ConsultationsScalarFieldEnum | ConsultationsScalarFieldEnum[]
  }

  /**
   * Patients without action
   */
  export type PatientsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patients
     */
    select?: PatientsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patients
     */
    omit?: PatientsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientsInclude<ExtArgs> | null
  }


  /**
   * Model Medecins
   */

  export type AggregateMedecins = {
    _count: MedecinsCountAggregateOutputType | null
    _avg: MedecinsAvgAggregateOutputType | null
    _sum: MedecinsSumAggregateOutputType | null
    _min: MedecinsMinAggregateOutputType | null
    _max: MedecinsMaxAggregateOutputType | null
  }

  export type MedecinsAvgAggregateOutputType = {
    nombre_signalement: number | null
  }

  export type MedecinsSumAggregateOutputType = {
    nombre_signalement: number | null
  }

  export type MedecinsMinAggregateOutputType = {
    id_medecin: string | null
    specialite: string | null
    description: string | null
    nombre_signalement: number | null
    cree_le: Date | null
    modifie_le: Date | null
    userId: string | null
  }

  export type MedecinsMaxAggregateOutputType = {
    id_medecin: string | null
    specialite: string | null
    description: string | null
    nombre_signalement: number | null
    cree_le: Date | null
    modifie_le: Date | null
    userId: string | null
  }

  export type MedecinsCountAggregateOutputType = {
    id_medecin: number
    specialite: number
    description: number
    nombre_signalement: number
    cree_le: number
    modifie_le: number
    userId: number
    _all: number
  }


  export type MedecinsAvgAggregateInputType = {
    nombre_signalement?: true
  }

  export type MedecinsSumAggregateInputType = {
    nombre_signalement?: true
  }

  export type MedecinsMinAggregateInputType = {
    id_medecin?: true
    specialite?: true
    description?: true
    nombre_signalement?: true
    cree_le?: true
    modifie_le?: true
    userId?: true
  }

  export type MedecinsMaxAggregateInputType = {
    id_medecin?: true
    specialite?: true
    description?: true
    nombre_signalement?: true
    cree_le?: true
    modifie_le?: true
    userId?: true
  }

  export type MedecinsCountAggregateInputType = {
    id_medecin?: true
    specialite?: true
    description?: true
    nombre_signalement?: true
    cree_le?: true
    modifie_le?: true
    userId?: true
    _all?: true
  }

  export type MedecinsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Medecins to aggregate.
     */
    where?: MedecinsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Medecins to fetch.
     */
    orderBy?: MedecinsOrderByWithRelationInput | MedecinsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MedecinsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Medecins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Medecins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Medecins
    **/
    _count?: true | MedecinsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MedecinsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MedecinsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MedecinsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MedecinsMaxAggregateInputType
  }

  export type GetMedecinsAggregateType<T extends MedecinsAggregateArgs> = {
        [P in keyof T & keyof AggregateMedecins]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMedecins[P]>
      : GetScalarType<T[P], AggregateMedecins[P]>
  }




  export type MedecinsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MedecinsWhereInput
    orderBy?: MedecinsOrderByWithAggregationInput | MedecinsOrderByWithAggregationInput[]
    by: MedecinsScalarFieldEnum[] | MedecinsScalarFieldEnum
    having?: MedecinsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MedecinsCountAggregateInputType | true
    _avg?: MedecinsAvgAggregateInputType
    _sum?: MedecinsSumAggregateInputType
    _min?: MedecinsMinAggregateInputType
    _max?: MedecinsMaxAggregateInputType
  }

  export type MedecinsGroupByOutputType = {
    id_medecin: string
    specialite: string
    description: string
    nombre_signalement: number
    cree_le: Date
    modifie_le: Date
    userId: string
    _count: MedecinsCountAggregateOutputType | null
    _avg: MedecinsAvgAggregateOutputType | null
    _sum: MedecinsSumAggregateOutputType | null
    _min: MedecinsMinAggregateOutputType | null
    _max: MedecinsMaxAggregateOutputType | null
  }

  type GetMedecinsGroupByPayload<T extends MedecinsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MedecinsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MedecinsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MedecinsGroupByOutputType[P]>
            : GetScalarType<T[P], MedecinsGroupByOutputType[P]>
        }
      >
    >


  export type MedecinsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_medecin?: boolean
    specialite?: boolean
    description?: boolean
    nombre_signalement?: boolean
    cree_le?: boolean
    modifie_le?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    rendezVous?: boolean | Medecins$rendezVousArgs<ExtArgs>
    posts?: boolean | Medecins$postsArgs<ExtArgs>
    consultations?: boolean | Medecins$consultationsArgs<ExtArgs>
    _count?: boolean | MedecinsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["medecins"]>

  export type MedecinsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_medecin?: boolean
    specialite?: boolean
    description?: boolean
    nombre_signalement?: boolean
    cree_le?: boolean
    modifie_le?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["medecins"]>

  export type MedecinsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_medecin?: boolean
    specialite?: boolean
    description?: boolean
    nombre_signalement?: boolean
    cree_le?: boolean
    modifie_le?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["medecins"]>

  export type MedecinsSelectScalar = {
    id_medecin?: boolean
    specialite?: boolean
    description?: boolean
    nombre_signalement?: boolean
    cree_le?: boolean
    modifie_le?: boolean
    userId?: boolean
  }

  export type MedecinsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_medecin" | "specialite" | "description" | "nombre_signalement" | "cree_le" | "modifie_le" | "userId", ExtArgs["result"]["medecins"]>
  export type MedecinsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    rendezVous?: boolean | Medecins$rendezVousArgs<ExtArgs>
    posts?: boolean | Medecins$postsArgs<ExtArgs>
    consultations?: boolean | Medecins$consultationsArgs<ExtArgs>
    _count?: boolean | MedecinsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type MedecinsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type MedecinsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $MedecinsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Medecins"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      rendezVous: Prisma.$RendezVousPayload<ExtArgs>[]
      posts: Prisma.$PostsPayload<ExtArgs>[]
      consultations: Prisma.$ConsultationsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_medecin: string
      specialite: string
      description: string
      nombre_signalement: number
      cree_le: Date
      modifie_le: Date
      userId: string
    }, ExtArgs["result"]["medecins"]>
    composites: {}
  }

  type MedecinsGetPayload<S extends boolean | null | undefined | MedecinsDefaultArgs> = $Result.GetResult<Prisma.$MedecinsPayload, S>

  type MedecinsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MedecinsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MedecinsCountAggregateInputType | true
    }

  export interface MedecinsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Medecins'], meta: { name: 'Medecins' } }
    /**
     * Find zero or one Medecins that matches the filter.
     * @param {MedecinsFindUniqueArgs} args - Arguments to find a Medecins
     * @example
     * // Get one Medecins
     * const medecins = await prisma.medecins.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MedecinsFindUniqueArgs>(args: SelectSubset<T, MedecinsFindUniqueArgs<ExtArgs>>): Prisma__MedecinsClient<$Result.GetResult<Prisma.$MedecinsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Medecins that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MedecinsFindUniqueOrThrowArgs} args - Arguments to find a Medecins
     * @example
     * // Get one Medecins
     * const medecins = await prisma.medecins.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MedecinsFindUniqueOrThrowArgs>(args: SelectSubset<T, MedecinsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MedecinsClient<$Result.GetResult<Prisma.$MedecinsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Medecins that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedecinsFindFirstArgs} args - Arguments to find a Medecins
     * @example
     * // Get one Medecins
     * const medecins = await prisma.medecins.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MedecinsFindFirstArgs>(args?: SelectSubset<T, MedecinsFindFirstArgs<ExtArgs>>): Prisma__MedecinsClient<$Result.GetResult<Prisma.$MedecinsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Medecins that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedecinsFindFirstOrThrowArgs} args - Arguments to find a Medecins
     * @example
     * // Get one Medecins
     * const medecins = await prisma.medecins.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MedecinsFindFirstOrThrowArgs>(args?: SelectSubset<T, MedecinsFindFirstOrThrowArgs<ExtArgs>>): Prisma__MedecinsClient<$Result.GetResult<Prisma.$MedecinsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Medecins that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedecinsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Medecins
     * const medecins = await prisma.medecins.findMany()
     * 
     * // Get first 10 Medecins
     * const medecins = await prisma.medecins.findMany({ take: 10 })
     * 
     * // Only select the `id_medecin`
     * const medecinsWithId_medecinOnly = await prisma.medecins.findMany({ select: { id_medecin: true } })
     * 
     */
    findMany<T extends MedecinsFindManyArgs>(args?: SelectSubset<T, MedecinsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MedecinsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Medecins.
     * @param {MedecinsCreateArgs} args - Arguments to create a Medecins.
     * @example
     * // Create one Medecins
     * const Medecins = await prisma.medecins.create({
     *   data: {
     *     // ... data to create a Medecins
     *   }
     * })
     * 
     */
    create<T extends MedecinsCreateArgs>(args: SelectSubset<T, MedecinsCreateArgs<ExtArgs>>): Prisma__MedecinsClient<$Result.GetResult<Prisma.$MedecinsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Medecins.
     * @param {MedecinsCreateManyArgs} args - Arguments to create many Medecins.
     * @example
     * // Create many Medecins
     * const medecins = await prisma.medecins.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MedecinsCreateManyArgs>(args?: SelectSubset<T, MedecinsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Medecins and returns the data saved in the database.
     * @param {MedecinsCreateManyAndReturnArgs} args - Arguments to create many Medecins.
     * @example
     * // Create many Medecins
     * const medecins = await prisma.medecins.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Medecins and only return the `id_medecin`
     * const medecinsWithId_medecinOnly = await prisma.medecins.createManyAndReturn({
     *   select: { id_medecin: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MedecinsCreateManyAndReturnArgs>(args?: SelectSubset<T, MedecinsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MedecinsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Medecins.
     * @param {MedecinsDeleteArgs} args - Arguments to delete one Medecins.
     * @example
     * // Delete one Medecins
     * const Medecins = await prisma.medecins.delete({
     *   where: {
     *     // ... filter to delete one Medecins
     *   }
     * })
     * 
     */
    delete<T extends MedecinsDeleteArgs>(args: SelectSubset<T, MedecinsDeleteArgs<ExtArgs>>): Prisma__MedecinsClient<$Result.GetResult<Prisma.$MedecinsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Medecins.
     * @param {MedecinsUpdateArgs} args - Arguments to update one Medecins.
     * @example
     * // Update one Medecins
     * const medecins = await prisma.medecins.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MedecinsUpdateArgs>(args: SelectSubset<T, MedecinsUpdateArgs<ExtArgs>>): Prisma__MedecinsClient<$Result.GetResult<Prisma.$MedecinsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Medecins.
     * @param {MedecinsDeleteManyArgs} args - Arguments to filter Medecins to delete.
     * @example
     * // Delete a few Medecins
     * const { count } = await prisma.medecins.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MedecinsDeleteManyArgs>(args?: SelectSubset<T, MedecinsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Medecins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedecinsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Medecins
     * const medecins = await prisma.medecins.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MedecinsUpdateManyArgs>(args: SelectSubset<T, MedecinsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Medecins and returns the data updated in the database.
     * @param {MedecinsUpdateManyAndReturnArgs} args - Arguments to update many Medecins.
     * @example
     * // Update many Medecins
     * const medecins = await prisma.medecins.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Medecins and only return the `id_medecin`
     * const medecinsWithId_medecinOnly = await prisma.medecins.updateManyAndReturn({
     *   select: { id_medecin: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MedecinsUpdateManyAndReturnArgs>(args: SelectSubset<T, MedecinsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MedecinsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Medecins.
     * @param {MedecinsUpsertArgs} args - Arguments to update or create a Medecins.
     * @example
     * // Update or create a Medecins
     * const medecins = await prisma.medecins.upsert({
     *   create: {
     *     // ... data to create a Medecins
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Medecins we want to update
     *   }
     * })
     */
    upsert<T extends MedecinsUpsertArgs>(args: SelectSubset<T, MedecinsUpsertArgs<ExtArgs>>): Prisma__MedecinsClient<$Result.GetResult<Prisma.$MedecinsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Medecins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedecinsCountArgs} args - Arguments to filter Medecins to count.
     * @example
     * // Count the number of Medecins
     * const count = await prisma.medecins.count({
     *   where: {
     *     // ... the filter for the Medecins we want to count
     *   }
     * })
    **/
    count<T extends MedecinsCountArgs>(
      args?: Subset<T, MedecinsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MedecinsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Medecins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedecinsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MedecinsAggregateArgs>(args: Subset<T, MedecinsAggregateArgs>): Prisma.PrismaPromise<GetMedecinsAggregateType<T>>

    /**
     * Group by Medecins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedecinsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MedecinsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MedecinsGroupByArgs['orderBy'] }
        : { orderBy?: MedecinsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MedecinsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMedecinsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Medecins model
   */
  readonly fields: MedecinsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Medecins.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MedecinsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    rendezVous<T extends Medecins$rendezVousArgs<ExtArgs> = {}>(args?: Subset<T, Medecins$rendezVousArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RendezVousPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    posts<T extends Medecins$postsArgs<ExtArgs> = {}>(args?: Subset<T, Medecins$postsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    consultations<T extends Medecins$consultationsArgs<ExtArgs> = {}>(args?: Subset<T, Medecins$consultationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConsultationsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Medecins model
   */
  interface MedecinsFieldRefs {
    readonly id_medecin: FieldRef<"Medecins", 'String'>
    readonly specialite: FieldRef<"Medecins", 'String'>
    readonly description: FieldRef<"Medecins", 'String'>
    readonly nombre_signalement: FieldRef<"Medecins", 'Int'>
    readonly cree_le: FieldRef<"Medecins", 'DateTime'>
    readonly modifie_le: FieldRef<"Medecins", 'DateTime'>
    readonly userId: FieldRef<"Medecins", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Medecins findUnique
   */
  export type MedecinsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medecins
     */
    select?: MedecinsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Medecins
     */
    omit?: MedecinsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedecinsInclude<ExtArgs> | null
    /**
     * Filter, which Medecins to fetch.
     */
    where: MedecinsWhereUniqueInput
  }

  /**
   * Medecins findUniqueOrThrow
   */
  export type MedecinsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medecins
     */
    select?: MedecinsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Medecins
     */
    omit?: MedecinsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedecinsInclude<ExtArgs> | null
    /**
     * Filter, which Medecins to fetch.
     */
    where: MedecinsWhereUniqueInput
  }

  /**
   * Medecins findFirst
   */
  export type MedecinsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medecins
     */
    select?: MedecinsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Medecins
     */
    omit?: MedecinsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedecinsInclude<ExtArgs> | null
    /**
     * Filter, which Medecins to fetch.
     */
    where?: MedecinsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Medecins to fetch.
     */
    orderBy?: MedecinsOrderByWithRelationInput | MedecinsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Medecins.
     */
    cursor?: MedecinsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Medecins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Medecins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Medecins.
     */
    distinct?: MedecinsScalarFieldEnum | MedecinsScalarFieldEnum[]
  }

  /**
   * Medecins findFirstOrThrow
   */
  export type MedecinsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medecins
     */
    select?: MedecinsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Medecins
     */
    omit?: MedecinsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedecinsInclude<ExtArgs> | null
    /**
     * Filter, which Medecins to fetch.
     */
    where?: MedecinsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Medecins to fetch.
     */
    orderBy?: MedecinsOrderByWithRelationInput | MedecinsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Medecins.
     */
    cursor?: MedecinsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Medecins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Medecins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Medecins.
     */
    distinct?: MedecinsScalarFieldEnum | MedecinsScalarFieldEnum[]
  }

  /**
   * Medecins findMany
   */
  export type MedecinsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medecins
     */
    select?: MedecinsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Medecins
     */
    omit?: MedecinsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedecinsInclude<ExtArgs> | null
    /**
     * Filter, which Medecins to fetch.
     */
    where?: MedecinsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Medecins to fetch.
     */
    orderBy?: MedecinsOrderByWithRelationInput | MedecinsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Medecins.
     */
    cursor?: MedecinsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Medecins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Medecins.
     */
    skip?: number
    distinct?: MedecinsScalarFieldEnum | MedecinsScalarFieldEnum[]
  }

  /**
   * Medecins create
   */
  export type MedecinsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medecins
     */
    select?: MedecinsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Medecins
     */
    omit?: MedecinsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedecinsInclude<ExtArgs> | null
    /**
     * The data needed to create a Medecins.
     */
    data: XOR<MedecinsCreateInput, MedecinsUncheckedCreateInput>
  }

  /**
   * Medecins createMany
   */
  export type MedecinsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Medecins.
     */
    data: MedecinsCreateManyInput | MedecinsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Medecins createManyAndReturn
   */
  export type MedecinsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medecins
     */
    select?: MedecinsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Medecins
     */
    omit?: MedecinsOmit<ExtArgs> | null
    /**
     * The data used to create many Medecins.
     */
    data: MedecinsCreateManyInput | MedecinsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedecinsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Medecins update
   */
  export type MedecinsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medecins
     */
    select?: MedecinsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Medecins
     */
    omit?: MedecinsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedecinsInclude<ExtArgs> | null
    /**
     * The data needed to update a Medecins.
     */
    data: XOR<MedecinsUpdateInput, MedecinsUncheckedUpdateInput>
    /**
     * Choose, which Medecins to update.
     */
    where: MedecinsWhereUniqueInput
  }

  /**
   * Medecins updateMany
   */
  export type MedecinsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Medecins.
     */
    data: XOR<MedecinsUpdateManyMutationInput, MedecinsUncheckedUpdateManyInput>
    /**
     * Filter which Medecins to update
     */
    where?: MedecinsWhereInput
    /**
     * Limit how many Medecins to update.
     */
    limit?: number
  }

  /**
   * Medecins updateManyAndReturn
   */
  export type MedecinsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medecins
     */
    select?: MedecinsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Medecins
     */
    omit?: MedecinsOmit<ExtArgs> | null
    /**
     * The data used to update Medecins.
     */
    data: XOR<MedecinsUpdateManyMutationInput, MedecinsUncheckedUpdateManyInput>
    /**
     * Filter which Medecins to update
     */
    where?: MedecinsWhereInput
    /**
     * Limit how many Medecins to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedecinsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Medecins upsert
   */
  export type MedecinsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medecins
     */
    select?: MedecinsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Medecins
     */
    omit?: MedecinsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedecinsInclude<ExtArgs> | null
    /**
     * The filter to search for the Medecins to update in case it exists.
     */
    where: MedecinsWhereUniqueInput
    /**
     * In case the Medecins found by the `where` argument doesn't exist, create a new Medecins with this data.
     */
    create: XOR<MedecinsCreateInput, MedecinsUncheckedCreateInput>
    /**
     * In case the Medecins was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MedecinsUpdateInput, MedecinsUncheckedUpdateInput>
  }

  /**
   * Medecins delete
   */
  export type MedecinsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medecins
     */
    select?: MedecinsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Medecins
     */
    omit?: MedecinsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedecinsInclude<ExtArgs> | null
    /**
     * Filter which Medecins to delete.
     */
    where: MedecinsWhereUniqueInput
  }

  /**
   * Medecins deleteMany
   */
  export type MedecinsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Medecins to delete
     */
    where?: MedecinsWhereInput
    /**
     * Limit how many Medecins to delete.
     */
    limit?: number
  }

  /**
   * Medecins.rendezVous
   */
  export type Medecins$rendezVousArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RendezVous
     */
    select?: RendezVousSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RendezVous
     */
    omit?: RendezVousOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RendezVousInclude<ExtArgs> | null
    where?: RendezVousWhereInput
    orderBy?: RendezVousOrderByWithRelationInput | RendezVousOrderByWithRelationInput[]
    cursor?: RendezVousWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RendezVousScalarFieldEnum | RendezVousScalarFieldEnum[]
  }

  /**
   * Medecins.posts
   */
  export type Medecins$postsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Posts
     */
    select?: PostsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Posts
     */
    omit?: PostsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostsInclude<ExtArgs> | null
    where?: PostsWhereInput
    orderBy?: PostsOrderByWithRelationInput | PostsOrderByWithRelationInput[]
    cursor?: PostsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PostsScalarFieldEnum | PostsScalarFieldEnum[]
  }

  /**
   * Medecins.consultations
   */
  export type Medecins$consultationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Consultations
     */
    select?: ConsultationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Consultations
     */
    omit?: ConsultationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsultationsInclude<ExtArgs> | null
    where?: ConsultationsWhereInput
    orderBy?: ConsultationsOrderByWithRelationInput | ConsultationsOrderByWithRelationInput[]
    cursor?: ConsultationsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ConsultationsScalarFieldEnum | ConsultationsScalarFieldEnum[]
  }

  /**
   * Medecins without action
   */
  export type MedecinsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medecins
     */
    select?: MedecinsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Medecins
     */
    omit?: MedecinsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedecinsInclude<ExtArgs> | null
  }


  /**
   * Model RendezVous
   */

  export type AggregateRendezVous = {
    _count: RendezVousCountAggregateOutputType | null
    _min: RendezVousMinAggregateOutputType | null
    _max: RendezVousMaxAggregateOutputType | null
  }

  export type RendezVousMinAggregateOutputType = {
    id_rdv: string | null
    motif: string | null
    cree_le: Date | null
    status: $Enums.StatusRvd | null
    modifie_le: Date | null
    id_patient: string | null
    id_medecin: string | null
  }

  export type RendezVousMaxAggregateOutputType = {
    id_rdv: string | null
    motif: string | null
    cree_le: Date | null
    status: $Enums.StatusRvd | null
    modifie_le: Date | null
    id_patient: string | null
    id_medecin: string | null
  }

  export type RendezVousCountAggregateOutputType = {
    id_rdv: number
    motif: number
    cree_le: number
    status: number
    modifie_le: number
    id_patient: number
    id_medecin: number
    _all: number
  }


  export type RendezVousMinAggregateInputType = {
    id_rdv?: true
    motif?: true
    cree_le?: true
    status?: true
    modifie_le?: true
    id_patient?: true
    id_medecin?: true
  }

  export type RendezVousMaxAggregateInputType = {
    id_rdv?: true
    motif?: true
    cree_le?: true
    status?: true
    modifie_le?: true
    id_patient?: true
    id_medecin?: true
  }

  export type RendezVousCountAggregateInputType = {
    id_rdv?: true
    motif?: true
    cree_le?: true
    status?: true
    modifie_le?: true
    id_patient?: true
    id_medecin?: true
    _all?: true
  }

  export type RendezVousAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RendezVous to aggregate.
     */
    where?: RendezVousWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RendezVous to fetch.
     */
    orderBy?: RendezVousOrderByWithRelationInput | RendezVousOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RendezVousWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RendezVous from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RendezVous.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RendezVous
    **/
    _count?: true | RendezVousCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RendezVousMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RendezVousMaxAggregateInputType
  }

  export type GetRendezVousAggregateType<T extends RendezVousAggregateArgs> = {
        [P in keyof T & keyof AggregateRendezVous]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRendezVous[P]>
      : GetScalarType<T[P], AggregateRendezVous[P]>
  }




  export type RendezVousGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RendezVousWhereInput
    orderBy?: RendezVousOrderByWithAggregationInput | RendezVousOrderByWithAggregationInput[]
    by: RendezVousScalarFieldEnum[] | RendezVousScalarFieldEnum
    having?: RendezVousScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RendezVousCountAggregateInputType | true
    _min?: RendezVousMinAggregateInputType
    _max?: RendezVousMaxAggregateInputType
  }

  export type RendezVousGroupByOutputType = {
    id_rdv: string
    motif: string
    cree_le: Date
    status: $Enums.StatusRvd
    modifie_le: Date
    id_patient: string
    id_medecin: string
    _count: RendezVousCountAggregateOutputType | null
    _min: RendezVousMinAggregateOutputType | null
    _max: RendezVousMaxAggregateOutputType | null
  }

  type GetRendezVousGroupByPayload<T extends RendezVousGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RendezVousGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RendezVousGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RendezVousGroupByOutputType[P]>
            : GetScalarType<T[P], RendezVousGroupByOutputType[P]>
        }
      >
    >


  export type RendezVousSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_rdv?: boolean
    motif?: boolean
    cree_le?: boolean
    status?: boolean
    modifie_le?: boolean
    id_patient?: boolean
    id_medecin?: boolean
    patients?: boolean | PatientsDefaultArgs<ExtArgs>
    medecins?: boolean | MedecinsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rendezVous"]>

  export type RendezVousSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_rdv?: boolean
    motif?: boolean
    cree_le?: boolean
    status?: boolean
    modifie_le?: boolean
    id_patient?: boolean
    id_medecin?: boolean
    patients?: boolean | PatientsDefaultArgs<ExtArgs>
    medecins?: boolean | MedecinsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rendezVous"]>

  export type RendezVousSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_rdv?: boolean
    motif?: boolean
    cree_le?: boolean
    status?: boolean
    modifie_le?: boolean
    id_patient?: boolean
    id_medecin?: boolean
    patients?: boolean | PatientsDefaultArgs<ExtArgs>
    medecins?: boolean | MedecinsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rendezVous"]>

  export type RendezVousSelectScalar = {
    id_rdv?: boolean
    motif?: boolean
    cree_le?: boolean
    status?: boolean
    modifie_le?: boolean
    id_patient?: boolean
    id_medecin?: boolean
  }

  export type RendezVousOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_rdv" | "motif" | "cree_le" | "status" | "modifie_le" | "id_patient" | "id_medecin", ExtArgs["result"]["rendezVous"]>
  export type RendezVousInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    patients?: boolean | PatientsDefaultArgs<ExtArgs>
    medecins?: boolean | MedecinsDefaultArgs<ExtArgs>
  }
  export type RendezVousIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    patients?: boolean | PatientsDefaultArgs<ExtArgs>
    medecins?: boolean | MedecinsDefaultArgs<ExtArgs>
  }
  export type RendezVousIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    patients?: boolean | PatientsDefaultArgs<ExtArgs>
    medecins?: boolean | MedecinsDefaultArgs<ExtArgs>
  }

  export type $RendezVousPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RendezVous"
    objects: {
      patients: Prisma.$PatientsPayload<ExtArgs>
      medecins: Prisma.$MedecinsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id_rdv: string
      motif: string
      cree_le: Date
      status: $Enums.StatusRvd
      modifie_le: Date
      id_patient: string
      id_medecin: string
    }, ExtArgs["result"]["rendezVous"]>
    composites: {}
  }

  type RendezVousGetPayload<S extends boolean | null | undefined | RendezVousDefaultArgs> = $Result.GetResult<Prisma.$RendezVousPayload, S>

  type RendezVousCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RendezVousFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RendezVousCountAggregateInputType | true
    }

  export interface RendezVousDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RendezVous'], meta: { name: 'RendezVous' } }
    /**
     * Find zero or one RendezVous that matches the filter.
     * @param {RendezVousFindUniqueArgs} args - Arguments to find a RendezVous
     * @example
     * // Get one RendezVous
     * const rendezVous = await prisma.rendezVous.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RendezVousFindUniqueArgs>(args: SelectSubset<T, RendezVousFindUniqueArgs<ExtArgs>>): Prisma__RendezVousClient<$Result.GetResult<Prisma.$RendezVousPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RendezVous that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RendezVousFindUniqueOrThrowArgs} args - Arguments to find a RendezVous
     * @example
     * // Get one RendezVous
     * const rendezVous = await prisma.rendezVous.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RendezVousFindUniqueOrThrowArgs>(args: SelectSubset<T, RendezVousFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RendezVousClient<$Result.GetResult<Prisma.$RendezVousPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RendezVous that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RendezVousFindFirstArgs} args - Arguments to find a RendezVous
     * @example
     * // Get one RendezVous
     * const rendezVous = await prisma.rendezVous.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RendezVousFindFirstArgs>(args?: SelectSubset<T, RendezVousFindFirstArgs<ExtArgs>>): Prisma__RendezVousClient<$Result.GetResult<Prisma.$RendezVousPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RendezVous that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RendezVousFindFirstOrThrowArgs} args - Arguments to find a RendezVous
     * @example
     * // Get one RendezVous
     * const rendezVous = await prisma.rendezVous.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RendezVousFindFirstOrThrowArgs>(args?: SelectSubset<T, RendezVousFindFirstOrThrowArgs<ExtArgs>>): Prisma__RendezVousClient<$Result.GetResult<Prisma.$RendezVousPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RendezVous that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RendezVousFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RendezVous
     * const rendezVous = await prisma.rendezVous.findMany()
     * 
     * // Get first 10 RendezVous
     * const rendezVous = await prisma.rendezVous.findMany({ take: 10 })
     * 
     * // Only select the `id_rdv`
     * const rendezVousWithId_rdvOnly = await prisma.rendezVous.findMany({ select: { id_rdv: true } })
     * 
     */
    findMany<T extends RendezVousFindManyArgs>(args?: SelectSubset<T, RendezVousFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RendezVousPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RendezVous.
     * @param {RendezVousCreateArgs} args - Arguments to create a RendezVous.
     * @example
     * // Create one RendezVous
     * const RendezVous = await prisma.rendezVous.create({
     *   data: {
     *     // ... data to create a RendezVous
     *   }
     * })
     * 
     */
    create<T extends RendezVousCreateArgs>(args: SelectSubset<T, RendezVousCreateArgs<ExtArgs>>): Prisma__RendezVousClient<$Result.GetResult<Prisma.$RendezVousPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RendezVous.
     * @param {RendezVousCreateManyArgs} args - Arguments to create many RendezVous.
     * @example
     * // Create many RendezVous
     * const rendezVous = await prisma.rendezVous.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RendezVousCreateManyArgs>(args?: SelectSubset<T, RendezVousCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many RendezVous and returns the data saved in the database.
     * @param {RendezVousCreateManyAndReturnArgs} args - Arguments to create many RendezVous.
     * @example
     * // Create many RendezVous
     * const rendezVous = await prisma.rendezVous.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many RendezVous and only return the `id_rdv`
     * const rendezVousWithId_rdvOnly = await prisma.rendezVous.createManyAndReturn({
     *   select: { id_rdv: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RendezVousCreateManyAndReturnArgs>(args?: SelectSubset<T, RendezVousCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RendezVousPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a RendezVous.
     * @param {RendezVousDeleteArgs} args - Arguments to delete one RendezVous.
     * @example
     * // Delete one RendezVous
     * const RendezVous = await prisma.rendezVous.delete({
     *   where: {
     *     // ... filter to delete one RendezVous
     *   }
     * })
     * 
     */
    delete<T extends RendezVousDeleteArgs>(args: SelectSubset<T, RendezVousDeleteArgs<ExtArgs>>): Prisma__RendezVousClient<$Result.GetResult<Prisma.$RendezVousPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RendezVous.
     * @param {RendezVousUpdateArgs} args - Arguments to update one RendezVous.
     * @example
     * // Update one RendezVous
     * const rendezVous = await prisma.rendezVous.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RendezVousUpdateArgs>(args: SelectSubset<T, RendezVousUpdateArgs<ExtArgs>>): Prisma__RendezVousClient<$Result.GetResult<Prisma.$RendezVousPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RendezVous.
     * @param {RendezVousDeleteManyArgs} args - Arguments to filter RendezVous to delete.
     * @example
     * // Delete a few RendezVous
     * const { count } = await prisma.rendezVous.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RendezVousDeleteManyArgs>(args?: SelectSubset<T, RendezVousDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RendezVous.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RendezVousUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RendezVous
     * const rendezVous = await prisma.rendezVous.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RendezVousUpdateManyArgs>(args: SelectSubset<T, RendezVousUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RendezVous and returns the data updated in the database.
     * @param {RendezVousUpdateManyAndReturnArgs} args - Arguments to update many RendezVous.
     * @example
     * // Update many RendezVous
     * const rendezVous = await prisma.rendezVous.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more RendezVous and only return the `id_rdv`
     * const rendezVousWithId_rdvOnly = await prisma.rendezVous.updateManyAndReturn({
     *   select: { id_rdv: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RendezVousUpdateManyAndReturnArgs>(args: SelectSubset<T, RendezVousUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RendezVousPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one RendezVous.
     * @param {RendezVousUpsertArgs} args - Arguments to update or create a RendezVous.
     * @example
     * // Update or create a RendezVous
     * const rendezVous = await prisma.rendezVous.upsert({
     *   create: {
     *     // ... data to create a RendezVous
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RendezVous we want to update
     *   }
     * })
     */
    upsert<T extends RendezVousUpsertArgs>(args: SelectSubset<T, RendezVousUpsertArgs<ExtArgs>>): Prisma__RendezVousClient<$Result.GetResult<Prisma.$RendezVousPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of RendezVous.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RendezVousCountArgs} args - Arguments to filter RendezVous to count.
     * @example
     * // Count the number of RendezVous
     * const count = await prisma.rendezVous.count({
     *   where: {
     *     // ... the filter for the RendezVous we want to count
     *   }
     * })
    **/
    count<T extends RendezVousCountArgs>(
      args?: Subset<T, RendezVousCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RendezVousCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RendezVous.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RendezVousAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RendezVousAggregateArgs>(args: Subset<T, RendezVousAggregateArgs>): Prisma.PrismaPromise<GetRendezVousAggregateType<T>>

    /**
     * Group by RendezVous.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RendezVousGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RendezVousGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RendezVousGroupByArgs['orderBy'] }
        : { orderBy?: RendezVousGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RendezVousGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRendezVousGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RendezVous model
   */
  readonly fields: RendezVousFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RendezVous.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RendezVousClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    patients<T extends PatientsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PatientsDefaultArgs<ExtArgs>>): Prisma__PatientsClient<$Result.GetResult<Prisma.$PatientsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    medecins<T extends MedecinsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MedecinsDefaultArgs<ExtArgs>>): Prisma__MedecinsClient<$Result.GetResult<Prisma.$MedecinsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the RendezVous model
   */
  interface RendezVousFieldRefs {
    readonly id_rdv: FieldRef<"RendezVous", 'String'>
    readonly motif: FieldRef<"RendezVous", 'String'>
    readonly cree_le: FieldRef<"RendezVous", 'DateTime'>
    readonly status: FieldRef<"RendezVous", 'StatusRvd'>
    readonly modifie_le: FieldRef<"RendezVous", 'DateTime'>
    readonly id_patient: FieldRef<"RendezVous", 'String'>
    readonly id_medecin: FieldRef<"RendezVous", 'String'>
  }
    

  // Custom InputTypes
  /**
   * RendezVous findUnique
   */
  export type RendezVousFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RendezVous
     */
    select?: RendezVousSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RendezVous
     */
    omit?: RendezVousOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RendezVousInclude<ExtArgs> | null
    /**
     * Filter, which RendezVous to fetch.
     */
    where: RendezVousWhereUniqueInput
  }

  /**
   * RendezVous findUniqueOrThrow
   */
  export type RendezVousFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RendezVous
     */
    select?: RendezVousSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RendezVous
     */
    omit?: RendezVousOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RendezVousInclude<ExtArgs> | null
    /**
     * Filter, which RendezVous to fetch.
     */
    where: RendezVousWhereUniqueInput
  }

  /**
   * RendezVous findFirst
   */
  export type RendezVousFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RendezVous
     */
    select?: RendezVousSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RendezVous
     */
    omit?: RendezVousOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RendezVousInclude<ExtArgs> | null
    /**
     * Filter, which RendezVous to fetch.
     */
    where?: RendezVousWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RendezVous to fetch.
     */
    orderBy?: RendezVousOrderByWithRelationInput | RendezVousOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RendezVous.
     */
    cursor?: RendezVousWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RendezVous from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RendezVous.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RendezVous.
     */
    distinct?: RendezVousScalarFieldEnum | RendezVousScalarFieldEnum[]
  }

  /**
   * RendezVous findFirstOrThrow
   */
  export type RendezVousFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RendezVous
     */
    select?: RendezVousSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RendezVous
     */
    omit?: RendezVousOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RendezVousInclude<ExtArgs> | null
    /**
     * Filter, which RendezVous to fetch.
     */
    where?: RendezVousWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RendezVous to fetch.
     */
    orderBy?: RendezVousOrderByWithRelationInput | RendezVousOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RendezVous.
     */
    cursor?: RendezVousWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RendezVous from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RendezVous.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RendezVous.
     */
    distinct?: RendezVousScalarFieldEnum | RendezVousScalarFieldEnum[]
  }

  /**
   * RendezVous findMany
   */
  export type RendezVousFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RendezVous
     */
    select?: RendezVousSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RendezVous
     */
    omit?: RendezVousOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RendezVousInclude<ExtArgs> | null
    /**
     * Filter, which RendezVous to fetch.
     */
    where?: RendezVousWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RendezVous to fetch.
     */
    orderBy?: RendezVousOrderByWithRelationInput | RendezVousOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RendezVous.
     */
    cursor?: RendezVousWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RendezVous from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RendezVous.
     */
    skip?: number
    distinct?: RendezVousScalarFieldEnum | RendezVousScalarFieldEnum[]
  }

  /**
   * RendezVous create
   */
  export type RendezVousCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RendezVous
     */
    select?: RendezVousSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RendezVous
     */
    omit?: RendezVousOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RendezVousInclude<ExtArgs> | null
    /**
     * The data needed to create a RendezVous.
     */
    data: XOR<RendezVousCreateInput, RendezVousUncheckedCreateInput>
  }

  /**
   * RendezVous createMany
   */
  export type RendezVousCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RendezVous.
     */
    data: RendezVousCreateManyInput | RendezVousCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RendezVous createManyAndReturn
   */
  export type RendezVousCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RendezVous
     */
    select?: RendezVousSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RendezVous
     */
    omit?: RendezVousOmit<ExtArgs> | null
    /**
     * The data used to create many RendezVous.
     */
    data: RendezVousCreateManyInput | RendezVousCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RendezVousIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * RendezVous update
   */
  export type RendezVousUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RendezVous
     */
    select?: RendezVousSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RendezVous
     */
    omit?: RendezVousOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RendezVousInclude<ExtArgs> | null
    /**
     * The data needed to update a RendezVous.
     */
    data: XOR<RendezVousUpdateInput, RendezVousUncheckedUpdateInput>
    /**
     * Choose, which RendezVous to update.
     */
    where: RendezVousWhereUniqueInput
  }

  /**
   * RendezVous updateMany
   */
  export type RendezVousUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RendezVous.
     */
    data: XOR<RendezVousUpdateManyMutationInput, RendezVousUncheckedUpdateManyInput>
    /**
     * Filter which RendezVous to update
     */
    where?: RendezVousWhereInput
    /**
     * Limit how many RendezVous to update.
     */
    limit?: number
  }

  /**
   * RendezVous updateManyAndReturn
   */
  export type RendezVousUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RendezVous
     */
    select?: RendezVousSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RendezVous
     */
    omit?: RendezVousOmit<ExtArgs> | null
    /**
     * The data used to update RendezVous.
     */
    data: XOR<RendezVousUpdateManyMutationInput, RendezVousUncheckedUpdateManyInput>
    /**
     * Filter which RendezVous to update
     */
    where?: RendezVousWhereInput
    /**
     * Limit how many RendezVous to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RendezVousIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * RendezVous upsert
   */
  export type RendezVousUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RendezVous
     */
    select?: RendezVousSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RendezVous
     */
    omit?: RendezVousOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RendezVousInclude<ExtArgs> | null
    /**
     * The filter to search for the RendezVous to update in case it exists.
     */
    where: RendezVousWhereUniqueInput
    /**
     * In case the RendezVous found by the `where` argument doesn't exist, create a new RendezVous with this data.
     */
    create: XOR<RendezVousCreateInput, RendezVousUncheckedCreateInput>
    /**
     * In case the RendezVous was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RendezVousUpdateInput, RendezVousUncheckedUpdateInput>
  }

  /**
   * RendezVous delete
   */
  export type RendezVousDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RendezVous
     */
    select?: RendezVousSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RendezVous
     */
    omit?: RendezVousOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RendezVousInclude<ExtArgs> | null
    /**
     * Filter which RendezVous to delete.
     */
    where: RendezVousWhereUniqueInput
  }

  /**
   * RendezVous deleteMany
   */
  export type RendezVousDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RendezVous to delete
     */
    where?: RendezVousWhereInput
    /**
     * Limit how many RendezVous to delete.
     */
    limit?: number
  }

  /**
   * RendezVous without action
   */
  export type RendezVousDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RendezVous
     */
    select?: RendezVousSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RendezVous
     */
    omit?: RendezVousOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RendezVousInclude<ExtArgs> | null
  }


  /**
   * Model Posts
   */

  export type AggregatePosts = {
    _count: PostsCountAggregateOutputType | null
    _avg: PostsAvgAggregateOutputType | null
    _sum: PostsSumAggregateOutputType | null
    _min: PostsMinAggregateOutputType | null
    _max: PostsMaxAggregateOutputType | null
  }

  export type PostsAvgAggregateOutputType = {
    star: number | null
    nombre_aime: number | null
    nombre_non_aime: number | null
    nombre_vue: number | null
  }

  export type PostsSumAggregateOutputType = {
    star: number | null
    nombre_aime: number | null
    nombre_non_aime: number | null
    nombre_vue: number | null
  }

  export type PostsMinAggregateOutputType = {
    id_post: string | null
    slug: string | null
    titre: string | null
    description: string | null
    lien_image: string | null
    star: number | null
    nombre_aime: number | null
    nombre_non_aime: number | null
    nombre_vue: number | null
    cree_le: Date | null
    modifie_le: Date | null
    id_medecin: string | null
  }

  export type PostsMaxAggregateOutputType = {
    id_post: string | null
    slug: string | null
    titre: string | null
    description: string | null
    lien_image: string | null
    star: number | null
    nombre_aime: number | null
    nombre_non_aime: number | null
    nombre_vue: number | null
    cree_le: Date | null
    modifie_le: Date | null
    id_medecin: string | null
  }

  export type PostsCountAggregateOutputType = {
    id_post: number
    slug: number
    titre: number
    description: number
    lien_image: number
    star: number
    nombre_aime: number
    nombre_non_aime: number
    nombre_vue: number
    cree_le: number
    modifie_le: number
    id_medecin: number
    _all: number
  }


  export type PostsAvgAggregateInputType = {
    star?: true
    nombre_aime?: true
    nombre_non_aime?: true
    nombre_vue?: true
  }

  export type PostsSumAggregateInputType = {
    star?: true
    nombre_aime?: true
    nombre_non_aime?: true
    nombre_vue?: true
  }

  export type PostsMinAggregateInputType = {
    id_post?: true
    slug?: true
    titre?: true
    description?: true
    lien_image?: true
    star?: true
    nombre_aime?: true
    nombre_non_aime?: true
    nombre_vue?: true
    cree_le?: true
    modifie_le?: true
    id_medecin?: true
  }

  export type PostsMaxAggregateInputType = {
    id_post?: true
    slug?: true
    titre?: true
    description?: true
    lien_image?: true
    star?: true
    nombre_aime?: true
    nombre_non_aime?: true
    nombre_vue?: true
    cree_le?: true
    modifie_le?: true
    id_medecin?: true
  }

  export type PostsCountAggregateInputType = {
    id_post?: true
    slug?: true
    titre?: true
    description?: true
    lien_image?: true
    star?: true
    nombre_aime?: true
    nombre_non_aime?: true
    nombre_vue?: true
    cree_le?: true
    modifie_le?: true
    id_medecin?: true
    _all?: true
  }

  export type PostsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Posts to aggregate.
     */
    where?: PostsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostsOrderByWithRelationInput | PostsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PostsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Posts
    **/
    _count?: true | PostsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PostsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PostsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PostsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PostsMaxAggregateInputType
  }

  export type GetPostsAggregateType<T extends PostsAggregateArgs> = {
        [P in keyof T & keyof AggregatePosts]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePosts[P]>
      : GetScalarType<T[P], AggregatePosts[P]>
  }




  export type PostsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostsWhereInput
    orderBy?: PostsOrderByWithAggregationInput | PostsOrderByWithAggregationInput[]
    by: PostsScalarFieldEnum[] | PostsScalarFieldEnum
    having?: PostsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PostsCountAggregateInputType | true
    _avg?: PostsAvgAggregateInputType
    _sum?: PostsSumAggregateInputType
    _min?: PostsMinAggregateInputType
    _max?: PostsMaxAggregateInputType
  }

  export type PostsGroupByOutputType = {
    id_post: string
    slug: string
    titre: string
    description: string
    lien_image: string | null
    star: number
    nombre_aime: number
    nombre_non_aime: number
    nombre_vue: number
    cree_le: Date
    modifie_le: Date
    id_medecin: string
    _count: PostsCountAggregateOutputType | null
    _avg: PostsAvgAggregateOutputType | null
    _sum: PostsSumAggregateOutputType | null
    _min: PostsMinAggregateOutputType | null
    _max: PostsMaxAggregateOutputType | null
  }

  type GetPostsGroupByPayload<T extends PostsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PostsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PostsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PostsGroupByOutputType[P]>
            : GetScalarType<T[P], PostsGroupByOutputType[P]>
        }
      >
    >


  export type PostsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_post?: boolean
    slug?: boolean
    titre?: boolean
    description?: boolean
    lien_image?: boolean
    star?: boolean
    nombre_aime?: boolean
    nombre_non_aime?: boolean
    nombre_vue?: boolean
    cree_le?: boolean
    modifie_le?: boolean
    id_medecin?: boolean
    medecins?: boolean | MedecinsDefaultArgs<ExtArgs>
    commentaires?: boolean | Posts$commentairesArgs<ExtArgs>
    _count?: boolean | PostsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["posts"]>

  export type PostsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_post?: boolean
    slug?: boolean
    titre?: boolean
    description?: boolean
    lien_image?: boolean
    star?: boolean
    nombre_aime?: boolean
    nombre_non_aime?: boolean
    nombre_vue?: boolean
    cree_le?: boolean
    modifie_le?: boolean
    id_medecin?: boolean
    medecins?: boolean | MedecinsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["posts"]>

  export type PostsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_post?: boolean
    slug?: boolean
    titre?: boolean
    description?: boolean
    lien_image?: boolean
    star?: boolean
    nombre_aime?: boolean
    nombre_non_aime?: boolean
    nombre_vue?: boolean
    cree_le?: boolean
    modifie_le?: boolean
    id_medecin?: boolean
    medecins?: boolean | MedecinsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["posts"]>

  export type PostsSelectScalar = {
    id_post?: boolean
    slug?: boolean
    titre?: boolean
    description?: boolean
    lien_image?: boolean
    star?: boolean
    nombre_aime?: boolean
    nombre_non_aime?: boolean
    nombre_vue?: boolean
    cree_le?: boolean
    modifie_le?: boolean
    id_medecin?: boolean
  }

  export type PostsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_post" | "slug" | "titre" | "description" | "lien_image" | "star" | "nombre_aime" | "nombre_non_aime" | "nombre_vue" | "cree_le" | "modifie_le" | "id_medecin", ExtArgs["result"]["posts"]>
  export type PostsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    medecins?: boolean | MedecinsDefaultArgs<ExtArgs>
    commentaires?: boolean | Posts$commentairesArgs<ExtArgs>
    _count?: boolean | PostsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PostsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    medecins?: boolean | MedecinsDefaultArgs<ExtArgs>
  }
  export type PostsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    medecins?: boolean | MedecinsDefaultArgs<ExtArgs>
  }

  export type $PostsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Posts"
    objects: {
      medecins: Prisma.$MedecinsPayload<ExtArgs>
      commentaires: Prisma.$CommentairesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_post: string
      slug: string
      titre: string
      description: string
      lien_image: string | null
      star: number
      nombre_aime: number
      nombre_non_aime: number
      nombre_vue: number
      cree_le: Date
      modifie_le: Date
      id_medecin: string
    }, ExtArgs["result"]["posts"]>
    composites: {}
  }

  type PostsGetPayload<S extends boolean | null | undefined | PostsDefaultArgs> = $Result.GetResult<Prisma.$PostsPayload, S>

  type PostsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PostsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PostsCountAggregateInputType | true
    }

  export interface PostsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Posts'], meta: { name: 'Posts' } }
    /**
     * Find zero or one Posts that matches the filter.
     * @param {PostsFindUniqueArgs} args - Arguments to find a Posts
     * @example
     * // Get one Posts
     * const posts = await prisma.posts.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PostsFindUniqueArgs>(args: SelectSubset<T, PostsFindUniqueArgs<ExtArgs>>): Prisma__PostsClient<$Result.GetResult<Prisma.$PostsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Posts that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PostsFindUniqueOrThrowArgs} args - Arguments to find a Posts
     * @example
     * // Get one Posts
     * const posts = await prisma.posts.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PostsFindUniqueOrThrowArgs>(args: SelectSubset<T, PostsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PostsClient<$Result.GetResult<Prisma.$PostsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Posts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostsFindFirstArgs} args - Arguments to find a Posts
     * @example
     * // Get one Posts
     * const posts = await prisma.posts.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PostsFindFirstArgs>(args?: SelectSubset<T, PostsFindFirstArgs<ExtArgs>>): Prisma__PostsClient<$Result.GetResult<Prisma.$PostsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Posts that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostsFindFirstOrThrowArgs} args - Arguments to find a Posts
     * @example
     * // Get one Posts
     * const posts = await prisma.posts.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PostsFindFirstOrThrowArgs>(args?: SelectSubset<T, PostsFindFirstOrThrowArgs<ExtArgs>>): Prisma__PostsClient<$Result.GetResult<Prisma.$PostsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Posts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Posts
     * const posts = await prisma.posts.findMany()
     * 
     * // Get first 10 Posts
     * const posts = await prisma.posts.findMany({ take: 10 })
     * 
     * // Only select the `id_post`
     * const postsWithId_postOnly = await prisma.posts.findMany({ select: { id_post: true } })
     * 
     */
    findMany<T extends PostsFindManyArgs>(args?: SelectSubset<T, PostsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Posts.
     * @param {PostsCreateArgs} args - Arguments to create a Posts.
     * @example
     * // Create one Posts
     * const Posts = await prisma.posts.create({
     *   data: {
     *     // ... data to create a Posts
     *   }
     * })
     * 
     */
    create<T extends PostsCreateArgs>(args: SelectSubset<T, PostsCreateArgs<ExtArgs>>): Prisma__PostsClient<$Result.GetResult<Prisma.$PostsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Posts.
     * @param {PostsCreateManyArgs} args - Arguments to create many Posts.
     * @example
     * // Create many Posts
     * const posts = await prisma.posts.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PostsCreateManyArgs>(args?: SelectSubset<T, PostsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Posts and returns the data saved in the database.
     * @param {PostsCreateManyAndReturnArgs} args - Arguments to create many Posts.
     * @example
     * // Create many Posts
     * const posts = await prisma.posts.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Posts and only return the `id_post`
     * const postsWithId_postOnly = await prisma.posts.createManyAndReturn({
     *   select: { id_post: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PostsCreateManyAndReturnArgs>(args?: SelectSubset<T, PostsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Posts.
     * @param {PostsDeleteArgs} args - Arguments to delete one Posts.
     * @example
     * // Delete one Posts
     * const Posts = await prisma.posts.delete({
     *   where: {
     *     // ... filter to delete one Posts
     *   }
     * })
     * 
     */
    delete<T extends PostsDeleteArgs>(args: SelectSubset<T, PostsDeleteArgs<ExtArgs>>): Prisma__PostsClient<$Result.GetResult<Prisma.$PostsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Posts.
     * @param {PostsUpdateArgs} args - Arguments to update one Posts.
     * @example
     * // Update one Posts
     * const posts = await prisma.posts.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PostsUpdateArgs>(args: SelectSubset<T, PostsUpdateArgs<ExtArgs>>): Prisma__PostsClient<$Result.GetResult<Prisma.$PostsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Posts.
     * @param {PostsDeleteManyArgs} args - Arguments to filter Posts to delete.
     * @example
     * // Delete a few Posts
     * const { count } = await prisma.posts.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PostsDeleteManyArgs>(args?: SelectSubset<T, PostsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Posts
     * const posts = await prisma.posts.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PostsUpdateManyArgs>(args: SelectSubset<T, PostsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Posts and returns the data updated in the database.
     * @param {PostsUpdateManyAndReturnArgs} args - Arguments to update many Posts.
     * @example
     * // Update many Posts
     * const posts = await prisma.posts.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Posts and only return the `id_post`
     * const postsWithId_postOnly = await prisma.posts.updateManyAndReturn({
     *   select: { id_post: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PostsUpdateManyAndReturnArgs>(args: SelectSubset<T, PostsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Posts.
     * @param {PostsUpsertArgs} args - Arguments to update or create a Posts.
     * @example
     * // Update or create a Posts
     * const posts = await prisma.posts.upsert({
     *   create: {
     *     // ... data to create a Posts
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Posts we want to update
     *   }
     * })
     */
    upsert<T extends PostsUpsertArgs>(args: SelectSubset<T, PostsUpsertArgs<ExtArgs>>): Prisma__PostsClient<$Result.GetResult<Prisma.$PostsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostsCountArgs} args - Arguments to filter Posts to count.
     * @example
     * // Count the number of Posts
     * const count = await prisma.posts.count({
     *   where: {
     *     // ... the filter for the Posts we want to count
     *   }
     * })
    **/
    count<T extends PostsCountArgs>(
      args?: Subset<T, PostsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PostsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PostsAggregateArgs>(args: Subset<T, PostsAggregateArgs>): Prisma.PrismaPromise<GetPostsAggregateType<T>>

    /**
     * Group by Posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PostsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PostsGroupByArgs['orderBy'] }
        : { orderBy?: PostsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PostsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPostsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Posts model
   */
  readonly fields: PostsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Posts.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PostsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    medecins<T extends MedecinsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MedecinsDefaultArgs<ExtArgs>>): Prisma__MedecinsClient<$Result.GetResult<Prisma.$MedecinsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    commentaires<T extends Posts$commentairesArgs<ExtArgs> = {}>(args?: Subset<T, Posts$commentairesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentairesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Posts model
   */
  interface PostsFieldRefs {
    readonly id_post: FieldRef<"Posts", 'String'>
    readonly slug: FieldRef<"Posts", 'String'>
    readonly titre: FieldRef<"Posts", 'String'>
    readonly description: FieldRef<"Posts", 'String'>
    readonly lien_image: FieldRef<"Posts", 'String'>
    readonly star: FieldRef<"Posts", 'Int'>
    readonly nombre_aime: FieldRef<"Posts", 'Int'>
    readonly nombre_non_aime: FieldRef<"Posts", 'Int'>
    readonly nombre_vue: FieldRef<"Posts", 'Int'>
    readonly cree_le: FieldRef<"Posts", 'DateTime'>
    readonly modifie_le: FieldRef<"Posts", 'DateTime'>
    readonly id_medecin: FieldRef<"Posts", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Posts findUnique
   */
  export type PostsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Posts
     */
    select?: PostsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Posts
     */
    omit?: PostsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostsInclude<ExtArgs> | null
    /**
     * Filter, which Posts to fetch.
     */
    where: PostsWhereUniqueInput
  }

  /**
   * Posts findUniqueOrThrow
   */
  export type PostsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Posts
     */
    select?: PostsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Posts
     */
    omit?: PostsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostsInclude<ExtArgs> | null
    /**
     * Filter, which Posts to fetch.
     */
    where: PostsWhereUniqueInput
  }

  /**
   * Posts findFirst
   */
  export type PostsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Posts
     */
    select?: PostsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Posts
     */
    omit?: PostsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostsInclude<ExtArgs> | null
    /**
     * Filter, which Posts to fetch.
     */
    where?: PostsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostsOrderByWithRelationInput | PostsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Posts.
     */
    cursor?: PostsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Posts.
     */
    distinct?: PostsScalarFieldEnum | PostsScalarFieldEnum[]
  }

  /**
   * Posts findFirstOrThrow
   */
  export type PostsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Posts
     */
    select?: PostsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Posts
     */
    omit?: PostsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostsInclude<ExtArgs> | null
    /**
     * Filter, which Posts to fetch.
     */
    where?: PostsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostsOrderByWithRelationInput | PostsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Posts.
     */
    cursor?: PostsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Posts.
     */
    distinct?: PostsScalarFieldEnum | PostsScalarFieldEnum[]
  }

  /**
   * Posts findMany
   */
  export type PostsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Posts
     */
    select?: PostsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Posts
     */
    omit?: PostsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostsInclude<ExtArgs> | null
    /**
     * Filter, which Posts to fetch.
     */
    where?: PostsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostsOrderByWithRelationInput | PostsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Posts.
     */
    cursor?: PostsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    distinct?: PostsScalarFieldEnum | PostsScalarFieldEnum[]
  }

  /**
   * Posts create
   */
  export type PostsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Posts
     */
    select?: PostsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Posts
     */
    omit?: PostsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostsInclude<ExtArgs> | null
    /**
     * The data needed to create a Posts.
     */
    data: XOR<PostsCreateInput, PostsUncheckedCreateInput>
  }

  /**
   * Posts createMany
   */
  export type PostsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Posts.
     */
    data: PostsCreateManyInput | PostsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Posts createManyAndReturn
   */
  export type PostsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Posts
     */
    select?: PostsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Posts
     */
    omit?: PostsOmit<ExtArgs> | null
    /**
     * The data used to create many Posts.
     */
    data: PostsCreateManyInput | PostsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Posts update
   */
  export type PostsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Posts
     */
    select?: PostsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Posts
     */
    omit?: PostsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostsInclude<ExtArgs> | null
    /**
     * The data needed to update a Posts.
     */
    data: XOR<PostsUpdateInput, PostsUncheckedUpdateInput>
    /**
     * Choose, which Posts to update.
     */
    where: PostsWhereUniqueInput
  }

  /**
   * Posts updateMany
   */
  export type PostsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Posts.
     */
    data: XOR<PostsUpdateManyMutationInput, PostsUncheckedUpdateManyInput>
    /**
     * Filter which Posts to update
     */
    where?: PostsWhereInput
    /**
     * Limit how many Posts to update.
     */
    limit?: number
  }

  /**
   * Posts updateManyAndReturn
   */
  export type PostsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Posts
     */
    select?: PostsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Posts
     */
    omit?: PostsOmit<ExtArgs> | null
    /**
     * The data used to update Posts.
     */
    data: XOR<PostsUpdateManyMutationInput, PostsUncheckedUpdateManyInput>
    /**
     * Filter which Posts to update
     */
    where?: PostsWhereInput
    /**
     * Limit how many Posts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Posts upsert
   */
  export type PostsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Posts
     */
    select?: PostsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Posts
     */
    omit?: PostsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostsInclude<ExtArgs> | null
    /**
     * The filter to search for the Posts to update in case it exists.
     */
    where: PostsWhereUniqueInput
    /**
     * In case the Posts found by the `where` argument doesn't exist, create a new Posts with this data.
     */
    create: XOR<PostsCreateInput, PostsUncheckedCreateInput>
    /**
     * In case the Posts was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PostsUpdateInput, PostsUncheckedUpdateInput>
  }

  /**
   * Posts delete
   */
  export type PostsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Posts
     */
    select?: PostsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Posts
     */
    omit?: PostsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostsInclude<ExtArgs> | null
    /**
     * Filter which Posts to delete.
     */
    where: PostsWhereUniqueInput
  }

  /**
   * Posts deleteMany
   */
  export type PostsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Posts to delete
     */
    where?: PostsWhereInput
    /**
     * Limit how many Posts to delete.
     */
    limit?: number
  }

  /**
   * Posts.commentaires
   */
  export type Posts$commentairesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Commentaires
     */
    select?: CommentairesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Commentaires
     */
    omit?: CommentairesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentairesInclude<ExtArgs> | null
    where?: CommentairesWhereInput
    orderBy?: CommentairesOrderByWithRelationInput | CommentairesOrderByWithRelationInput[]
    cursor?: CommentairesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CommentairesScalarFieldEnum | CommentairesScalarFieldEnum[]
  }

  /**
   * Posts without action
   */
  export type PostsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Posts
     */
    select?: PostsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Posts
     */
    omit?: PostsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostsInclude<ExtArgs> | null
  }


  /**
   * Model Commentaires
   */

  export type AggregateCommentaires = {
    _count: CommentairesCountAggregateOutputType | null
    _min: CommentairesMinAggregateOutputType | null
    _max: CommentairesMaxAggregateOutputType | null
  }

  export type CommentairesMinAggregateOutputType = {
    id_commentaire: string | null
    commentaire: string | null
    cree_le: Date | null
    modifie_le: Date | null
    id_post: string | null
  }

  export type CommentairesMaxAggregateOutputType = {
    id_commentaire: string | null
    commentaire: string | null
    cree_le: Date | null
    modifie_le: Date | null
    id_post: string | null
  }

  export type CommentairesCountAggregateOutputType = {
    id_commentaire: number
    commentaire: number
    cree_le: number
    modifie_le: number
    id_post: number
    _all: number
  }


  export type CommentairesMinAggregateInputType = {
    id_commentaire?: true
    commentaire?: true
    cree_le?: true
    modifie_le?: true
    id_post?: true
  }

  export type CommentairesMaxAggregateInputType = {
    id_commentaire?: true
    commentaire?: true
    cree_le?: true
    modifie_le?: true
    id_post?: true
  }

  export type CommentairesCountAggregateInputType = {
    id_commentaire?: true
    commentaire?: true
    cree_le?: true
    modifie_le?: true
    id_post?: true
    _all?: true
  }

  export type CommentairesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Commentaires to aggregate.
     */
    where?: CommentairesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Commentaires to fetch.
     */
    orderBy?: CommentairesOrderByWithRelationInput | CommentairesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CommentairesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Commentaires from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Commentaires.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Commentaires
    **/
    _count?: true | CommentairesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CommentairesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CommentairesMaxAggregateInputType
  }

  export type GetCommentairesAggregateType<T extends CommentairesAggregateArgs> = {
        [P in keyof T & keyof AggregateCommentaires]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCommentaires[P]>
      : GetScalarType<T[P], AggregateCommentaires[P]>
  }




  export type CommentairesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommentairesWhereInput
    orderBy?: CommentairesOrderByWithAggregationInput | CommentairesOrderByWithAggregationInput[]
    by: CommentairesScalarFieldEnum[] | CommentairesScalarFieldEnum
    having?: CommentairesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CommentairesCountAggregateInputType | true
    _min?: CommentairesMinAggregateInputType
    _max?: CommentairesMaxAggregateInputType
  }

  export type CommentairesGroupByOutputType = {
    id_commentaire: string
    commentaire: string
    cree_le: Date
    modifie_le: Date
    id_post: string
    _count: CommentairesCountAggregateOutputType | null
    _min: CommentairesMinAggregateOutputType | null
    _max: CommentairesMaxAggregateOutputType | null
  }

  type GetCommentairesGroupByPayload<T extends CommentairesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CommentairesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CommentairesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CommentairesGroupByOutputType[P]>
            : GetScalarType<T[P], CommentairesGroupByOutputType[P]>
        }
      >
    >


  export type CommentairesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_commentaire?: boolean
    commentaire?: boolean
    cree_le?: boolean
    modifie_le?: boolean
    id_post?: boolean
    posts?: boolean | PostsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["commentaires"]>

  export type CommentairesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_commentaire?: boolean
    commentaire?: boolean
    cree_le?: boolean
    modifie_le?: boolean
    id_post?: boolean
    posts?: boolean | PostsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["commentaires"]>

  export type CommentairesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_commentaire?: boolean
    commentaire?: boolean
    cree_le?: boolean
    modifie_le?: boolean
    id_post?: boolean
    posts?: boolean | PostsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["commentaires"]>

  export type CommentairesSelectScalar = {
    id_commentaire?: boolean
    commentaire?: boolean
    cree_le?: boolean
    modifie_le?: boolean
    id_post?: boolean
  }

  export type CommentairesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_commentaire" | "commentaire" | "cree_le" | "modifie_le" | "id_post", ExtArgs["result"]["commentaires"]>
  export type CommentairesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    posts?: boolean | PostsDefaultArgs<ExtArgs>
  }
  export type CommentairesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    posts?: boolean | PostsDefaultArgs<ExtArgs>
  }
  export type CommentairesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    posts?: boolean | PostsDefaultArgs<ExtArgs>
  }

  export type $CommentairesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Commentaires"
    objects: {
      posts: Prisma.$PostsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id_commentaire: string
      commentaire: string
      cree_le: Date
      modifie_le: Date
      id_post: string
    }, ExtArgs["result"]["commentaires"]>
    composites: {}
  }

  type CommentairesGetPayload<S extends boolean | null | undefined | CommentairesDefaultArgs> = $Result.GetResult<Prisma.$CommentairesPayload, S>

  type CommentairesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CommentairesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CommentairesCountAggregateInputType | true
    }

  export interface CommentairesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Commentaires'], meta: { name: 'Commentaires' } }
    /**
     * Find zero or one Commentaires that matches the filter.
     * @param {CommentairesFindUniqueArgs} args - Arguments to find a Commentaires
     * @example
     * // Get one Commentaires
     * const commentaires = await prisma.commentaires.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CommentairesFindUniqueArgs>(args: SelectSubset<T, CommentairesFindUniqueArgs<ExtArgs>>): Prisma__CommentairesClient<$Result.GetResult<Prisma.$CommentairesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Commentaires that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CommentairesFindUniqueOrThrowArgs} args - Arguments to find a Commentaires
     * @example
     * // Get one Commentaires
     * const commentaires = await prisma.commentaires.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CommentairesFindUniqueOrThrowArgs>(args: SelectSubset<T, CommentairesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CommentairesClient<$Result.GetResult<Prisma.$CommentairesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Commentaires that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentairesFindFirstArgs} args - Arguments to find a Commentaires
     * @example
     * // Get one Commentaires
     * const commentaires = await prisma.commentaires.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CommentairesFindFirstArgs>(args?: SelectSubset<T, CommentairesFindFirstArgs<ExtArgs>>): Prisma__CommentairesClient<$Result.GetResult<Prisma.$CommentairesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Commentaires that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentairesFindFirstOrThrowArgs} args - Arguments to find a Commentaires
     * @example
     * // Get one Commentaires
     * const commentaires = await prisma.commentaires.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CommentairesFindFirstOrThrowArgs>(args?: SelectSubset<T, CommentairesFindFirstOrThrowArgs<ExtArgs>>): Prisma__CommentairesClient<$Result.GetResult<Prisma.$CommentairesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Commentaires that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentairesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Commentaires
     * const commentaires = await prisma.commentaires.findMany()
     * 
     * // Get first 10 Commentaires
     * const commentaires = await prisma.commentaires.findMany({ take: 10 })
     * 
     * // Only select the `id_commentaire`
     * const commentairesWithId_commentaireOnly = await prisma.commentaires.findMany({ select: { id_commentaire: true } })
     * 
     */
    findMany<T extends CommentairesFindManyArgs>(args?: SelectSubset<T, CommentairesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentairesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Commentaires.
     * @param {CommentairesCreateArgs} args - Arguments to create a Commentaires.
     * @example
     * // Create one Commentaires
     * const Commentaires = await prisma.commentaires.create({
     *   data: {
     *     // ... data to create a Commentaires
     *   }
     * })
     * 
     */
    create<T extends CommentairesCreateArgs>(args: SelectSubset<T, CommentairesCreateArgs<ExtArgs>>): Prisma__CommentairesClient<$Result.GetResult<Prisma.$CommentairesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Commentaires.
     * @param {CommentairesCreateManyArgs} args - Arguments to create many Commentaires.
     * @example
     * // Create many Commentaires
     * const commentaires = await prisma.commentaires.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CommentairesCreateManyArgs>(args?: SelectSubset<T, CommentairesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Commentaires and returns the data saved in the database.
     * @param {CommentairesCreateManyAndReturnArgs} args - Arguments to create many Commentaires.
     * @example
     * // Create many Commentaires
     * const commentaires = await prisma.commentaires.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Commentaires and only return the `id_commentaire`
     * const commentairesWithId_commentaireOnly = await prisma.commentaires.createManyAndReturn({
     *   select: { id_commentaire: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CommentairesCreateManyAndReturnArgs>(args?: SelectSubset<T, CommentairesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentairesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Commentaires.
     * @param {CommentairesDeleteArgs} args - Arguments to delete one Commentaires.
     * @example
     * // Delete one Commentaires
     * const Commentaires = await prisma.commentaires.delete({
     *   where: {
     *     // ... filter to delete one Commentaires
     *   }
     * })
     * 
     */
    delete<T extends CommentairesDeleteArgs>(args: SelectSubset<T, CommentairesDeleteArgs<ExtArgs>>): Prisma__CommentairesClient<$Result.GetResult<Prisma.$CommentairesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Commentaires.
     * @param {CommentairesUpdateArgs} args - Arguments to update one Commentaires.
     * @example
     * // Update one Commentaires
     * const commentaires = await prisma.commentaires.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CommentairesUpdateArgs>(args: SelectSubset<T, CommentairesUpdateArgs<ExtArgs>>): Prisma__CommentairesClient<$Result.GetResult<Prisma.$CommentairesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Commentaires.
     * @param {CommentairesDeleteManyArgs} args - Arguments to filter Commentaires to delete.
     * @example
     * // Delete a few Commentaires
     * const { count } = await prisma.commentaires.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CommentairesDeleteManyArgs>(args?: SelectSubset<T, CommentairesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Commentaires.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentairesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Commentaires
     * const commentaires = await prisma.commentaires.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CommentairesUpdateManyArgs>(args: SelectSubset<T, CommentairesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Commentaires and returns the data updated in the database.
     * @param {CommentairesUpdateManyAndReturnArgs} args - Arguments to update many Commentaires.
     * @example
     * // Update many Commentaires
     * const commentaires = await prisma.commentaires.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Commentaires and only return the `id_commentaire`
     * const commentairesWithId_commentaireOnly = await prisma.commentaires.updateManyAndReturn({
     *   select: { id_commentaire: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CommentairesUpdateManyAndReturnArgs>(args: SelectSubset<T, CommentairesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentairesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Commentaires.
     * @param {CommentairesUpsertArgs} args - Arguments to update or create a Commentaires.
     * @example
     * // Update or create a Commentaires
     * const commentaires = await prisma.commentaires.upsert({
     *   create: {
     *     // ... data to create a Commentaires
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Commentaires we want to update
     *   }
     * })
     */
    upsert<T extends CommentairesUpsertArgs>(args: SelectSubset<T, CommentairesUpsertArgs<ExtArgs>>): Prisma__CommentairesClient<$Result.GetResult<Prisma.$CommentairesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Commentaires.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentairesCountArgs} args - Arguments to filter Commentaires to count.
     * @example
     * // Count the number of Commentaires
     * const count = await prisma.commentaires.count({
     *   where: {
     *     // ... the filter for the Commentaires we want to count
     *   }
     * })
    **/
    count<T extends CommentairesCountArgs>(
      args?: Subset<T, CommentairesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CommentairesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Commentaires.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentairesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CommentairesAggregateArgs>(args: Subset<T, CommentairesAggregateArgs>): Prisma.PrismaPromise<GetCommentairesAggregateType<T>>

    /**
     * Group by Commentaires.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentairesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CommentairesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CommentairesGroupByArgs['orderBy'] }
        : { orderBy?: CommentairesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CommentairesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCommentairesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Commentaires model
   */
  readonly fields: CommentairesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Commentaires.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CommentairesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    posts<T extends PostsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PostsDefaultArgs<ExtArgs>>): Prisma__PostsClient<$Result.GetResult<Prisma.$PostsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Commentaires model
   */
  interface CommentairesFieldRefs {
    readonly id_commentaire: FieldRef<"Commentaires", 'String'>
    readonly commentaire: FieldRef<"Commentaires", 'String'>
    readonly cree_le: FieldRef<"Commentaires", 'DateTime'>
    readonly modifie_le: FieldRef<"Commentaires", 'DateTime'>
    readonly id_post: FieldRef<"Commentaires", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Commentaires findUnique
   */
  export type CommentairesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Commentaires
     */
    select?: CommentairesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Commentaires
     */
    omit?: CommentairesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentairesInclude<ExtArgs> | null
    /**
     * Filter, which Commentaires to fetch.
     */
    where: CommentairesWhereUniqueInput
  }

  /**
   * Commentaires findUniqueOrThrow
   */
  export type CommentairesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Commentaires
     */
    select?: CommentairesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Commentaires
     */
    omit?: CommentairesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentairesInclude<ExtArgs> | null
    /**
     * Filter, which Commentaires to fetch.
     */
    where: CommentairesWhereUniqueInput
  }

  /**
   * Commentaires findFirst
   */
  export type CommentairesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Commentaires
     */
    select?: CommentairesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Commentaires
     */
    omit?: CommentairesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentairesInclude<ExtArgs> | null
    /**
     * Filter, which Commentaires to fetch.
     */
    where?: CommentairesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Commentaires to fetch.
     */
    orderBy?: CommentairesOrderByWithRelationInput | CommentairesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Commentaires.
     */
    cursor?: CommentairesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Commentaires from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Commentaires.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Commentaires.
     */
    distinct?: CommentairesScalarFieldEnum | CommentairesScalarFieldEnum[]
  }

  /**
   * Commentaires findFirstOrThrow
   */
  export type CommentairesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Commentaires
     */
    select?: CommentairesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Commentaires
     */
    omit?: CommentairesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentairesInclude<ExtArgs> | null
    /**
     * Filter, which Commentaires to fetch.
     */
    where?: CommentairesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Commentaires to fetch.
     */
    orderBy?: CommentairesOrderByWithRelationInput | CommentairesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Commentaires.
     */
    cursor?: CommentairesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Commentaires from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Commentaires.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Commentaires.
     */
    distinct?: CommentairesScalarFieldEnum | CommentairesScalarFieldEnum[]
  }

  /**
   * Commentaires findMany
   */
  export type CommentairesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Commentaires
     */
    select?: CommentairesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Commentaires
     */
    omit?: CommentairesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentairesInclude<ExtArgs> | null
    /**
     * Filter, which Commentaires to fetch.
     */
    where?: CommentairesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Commentaires to fetch.
     */
    orderBy?: CommentairesOrderByWithRelationInput | CommentairesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Commentaires.
     */
    cursor?: CommentairesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Commentaires from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Commentaires.
     */
    skip?: number
    distinct?: CommentairesScalarFieldEnum | CommentairesScalarFieldEnum[]
  }

  /**
   * Commentaires create
   */
  export type CommentairesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Commentaires
     */
    select?: CommentairesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Commentaires
     */
    omit?: CommentairesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentairesInclude<ExtArgs> | null
    /**
     * The data needed to create a Commentaires.
     */
    data: XOR<CommentairesCreateInput, CommentairesUncheckedCreateInput>
  }

  /**
   * Commentaires createMany
   */
  export type CommentairesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Commentaires.
     */
    data: CommentairesCreateManyInput | CommentairesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Commentaires createManyAndReturn
   */
  export type CommentairesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Commentaires
     */
    select?: CommentairesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Commentaires
     */
    omit?: CommentairesOmit<ExtArgs> | null
    /**
     * The data used to create many Commentaires.
     */
    data: CommentairesCreateManyInput | CommentairesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentairesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Commentaires update
   */
  export type CommentairesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Commentaires
     */
    select?: CommentairesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Commentaires
     */
    omit?: CommentairesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentairesInclude<ExtArgs> | null
    /**
     * The data needed to update a Commentaires.
     */
    data: XOR<CommentairesUpdateInput, CommentairesUncheckedUpdateInput>
    /**
     * Choose, which Commentaires to update.
     */
    where: CommentairesWhereUniqueInput
  }

  /**
   * Commentaires updateMany
   */
  export type CommentairesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Commentaires.
     */
    data: XOR<CommentairesUpdateManyMutationInput, CommentairesUncheckedUpdateManyInput>
    /**
     * Filter which Commentaires to update
     */
    where?: CommentairesWhereInput
    /**
     * Limit how many Commentaires to update.
     */
    limit?: number
  }

  /**
   * Commentaires updateManyAndReturn
   */
  export type CommentairesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Commentaires
     */
    select?: CommentairesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Commentaires
     */
    omit?: CommentairesOmit<ExtArgs> | null
    /**
     * The data used to update Commentaires.
     */
    data: XOR<CommentairesUpdateManyMutationInput, CommentairesUncheckedUpdateManyInput>
    /**
     * Filter which Commentaires to update
     */
    where?: CommentairesWhereInput
    /**
     * Limit how many Commentaires to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentairesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Commentaires upsert
   */
  export type CommentairesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Commentaires
     */
    select?: CommentairesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Commentaires
     */
    omit?: CommentairesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentairesInclude<ExtArgs> | null
    /**
     * The filter to search for the Commentaires to update in case it exists.
     */
    where: CommentairesWhereUniqueInput
    /**
     * In case the Commentaires found by the `where` argument doesn't exist, create a new Commentaires with this data.
     */
    create: XOR<CommentairesCreateInput, CommentairesUncheckedCreateInput>
    /**
     * In case the Commentaires was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CommentairesUpdateInput, CommentairesUncheckedUpdateInput>
  }

  /**
   * Commentaires delete
   */
  export type CommentairesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Commentaires
     */
    select?: CommentairesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Commentaires
     */
    omit?: CommentairesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentairesInclude<ExtArgs> | null
    /**
     * Filter which Commentaires to delete.
     */
    where: CommentairesWhereUniqueInput
  }

  /**
   * Commentaires deleteMany
   */
  export type CommentairesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Commentaires to delete
     */
    where?: CommentairesWhereInput
    /**
     * Limit how many Commentaires to delete.
     */
    limit?: number
  }

  /**
   * Commentaires without action
   */
  export type CommentairesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Commentaires
     */
    select?: CommentairesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Commentaires
     */
    omit?: CommentairesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentairesInclude<ExtArgs> | null
  }


  /**
   * Model Consultations
   */

  export type AggregateConsultations = {
    _count: ConsultationsCountAggregateOutputType | null
    _min: ConsultationsMinAggregateOutputType | null
    _max: ConsultationsMaxAggregateOutputType | null
  }

  export type ConsultationsMinAggregateOutputType = {
    id_consultation: string | null
    diagnostique: string | null
    cree_le: Date | null
    modifie_le: Date | null
    id_patient: string | null
    id_medecin: string | null
  }

  export type ConsultationsMaxAggregateOutputType = {
    id_consultation: string | null
    diagnostique: string | null
    cree_le: Date | null
    modifie_le: Date | null
    id_patient: string | null
    id_medecin: string | null
  }

  export type ConsultationsCountAggregateOutputType = {
    id_consultation: number
    diagnostique: number
    cree_le: number
    modifie_le: number
    id_patient: number
    id_medecin: number
    _all: number
  }


  export type ConsultationsMinAggregateInputType = {
    id_consultation?: true
    diagnostique?: true
    cree_le?: true
    modifie_le?: true
    id_patient?: true
    id_medecin?: true
  }

  export type ConsultationsMaxAggregateInputType = {
    id_consultation?: true
    diagnostique?: true
    cree_le?: true
    modifie_le?: true
    id_patient?: true
    id_medecin?: true
  }

  export type ConsultationsCountAggregateInputType = {
    id_consultation?: true
    diagnostique?: true
    cree_le?: true
    modifie_le?: true
    id_patient?: true
    id_medecin?: true
    _all?: true
  }

  export type ConsultationsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Consultations to aggregate.
     */
    where?: ConsultationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Consultations to fetch.
     */
    orderBy?: ConsultationsOrderByWithRelationInput | ConsultationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ConsultationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Consultations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Consultations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Consultations
    **/
    _count?: true | ConsultationsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ConsultationsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ConsultationsMaxAggregateInputType
  }

  export type GetConsultationsAggregateType<T extends ConsultationsAggregateArgs> = {
        [P in keyof T & keyof AggregateConsultations]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateConsultations[P]>
      : GetScalarType<T[P], AggregateConsultations[P]>
  }




  export type ConsultationsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ConsultationsWhereInput
    orderBy?: ConsultationsOrderByWithAggregationInput | ConsultationsOrderByWithAggregationInput[]
    by: ConsultationsScalarFieldEnum[] | ConsultationsScalarFieldEnum
    having?: ConsultationsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ConsultationsCountAggregateInputType | true
    _min?: ConsultationsMinAggregateInputType
    _max?: ConsultationsMaxAggregateInputType
  }

  export type ConsultationsGroupByOutputType = {
    id_consultation: string
    diagnostique: string
    cree_le: Date
    modifie_le: Date
    id_patient: string
    id_medecin: string
    _count: ConsultationsCountAggregateOutputType | null
    _min: ConsultationsMinAggregateOutputType | null
    _max: ConsultationsMaxAggregateOutputType | null
  }

  type GetConsultationsGroupByPayload<T extends ConsultationsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ConsultationsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ConsultationsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ConsultationsGroupByOutputType[P]>
            : GetScalarType<T[P], ConsultationsGroupByOutputType[P]>
        }
      >
    >


  export type ConsultationsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_consultation?: boolean
    diagnostique?: boolean
    cree_le?: boolean
    modifie_le?: boolean
    id_patient?: boolean
    id_medecin?: boolean
    patient?: boolean | PatientsDefaultArgs<ExtArgs>
    medecin?: boolean | MedecinsDefaultArgs<ExtArgs>
    fichiers?: boolean | Consultations$fichiersArgs<ExtArgs>
    _count?: boolean | ConsultationsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["consultations"]>

  export type ConsultationsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_consultation?: boolean
    diagnostique?: boolean
    cree_le?: boolean
    modifie_le?: boolean
    id_patient?: boolean
    id_medecin?: boolean
    patient?: boolean | PatientsDefaultArgs<ExtArgs>
    medecin?: boolean | MedecinsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["consultations"]>

  export type ConsultationsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_consultation?: boolean
    diagnostique?: boolean
    cree_le?: boolean
    modifie_le?: boolean
    id_patient?: boolean
    id_medecin?: boolean
    patient?: boolean | PatientsDefaultArgs<ExtArgs>
    medecin?: boolean | MedecinsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["consultations"]>

  export type ConsultationsSelectScalar = {
    id_consultation?: boolean
    diagnostique?: boolean
    cree_le?: boolean
    modifie_le?: boolean
    id_patient?: boolean
    id_medecin?: boolean
  }

  export type ConsultationsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_consultation" | "diagnostique" | "cree_le" | "modifie_le" | "id_patient" | "id_medecin", ExtArgs["result"]["consultations"]>
  export type ConsultationsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    patient?: boolean | PatientsDefaultArgs<ExtArgs>
    medecin?: boolean | MedecinsDefaultArgs<ExtArgs>
    fichiers?: boolean | Consultations$fichiersArgs<ExtArgs>
    _count?: boolean | ConsultationsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ConsultationsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    patient?: boolean | PatientsDefaultArgs<ExtArgs>
    medecin?: boolean | MedecinsDefaultArgs<ExtArgs>
  }
  export type ConsultationsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    patient?: boolean | PatientsDefaultArgs<ExtArgs>
    medecin?: boolean | MedecinsDefaultArgs<ExtArgs>
  }

  export type $ConsultationsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Consultations"
    objects: {
      patient: Prisma.$PatientsPayload<ExtArgs>
      medecin: Prisma.$MedecinsPayload<ExtArgs>
      fichiers: Prisma.$FichiersPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_consultation: string
      diagnostique: string
      cree_le: Date
      modifie_le: Date
      id_patient: string
      id_medecin: string
    }, ExtArgs["result"]["consultations"]>
    composites: {}
  }

  type ConsultationsGetPayload<S extends boolean | null | undefined | ConsultationsDefaultArgs> = $Result.GetResult<Prisma.$ConsultationsPayload, S>

  type ConsultationsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ConsultationsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ConsultationsCountAggregateInputType | true
    }

  export interface ConsultationsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Consultations'], meta: { name: 'Consultations' } }
    /**
     * Find zero or one Consultations that matches the filter.
     * @param {ConsultationsFindUniqueArgs} args - Arguments to find a Consultations
     * @example
     * // Get one Consultations
     * const consultations = await prisma.consultations.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ConsultationsFindUniqueArgs>(args: SelectSubset<T, ConsultationsFindUniqueArgs<ExtArgs>>): Prisma__ConsultationsClient<$Result.GetResult<Prisma.$ConsultationsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Consultations that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ConsultationsFindUniqueOrThrowArgs} args - Arguments to find a Consultations
     * @example
     * // Get one Consultations
     * const consultations = await prisma.consultations.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ConsultationsFindUniqueOrThrowArgs>(args: SelectSubset<T, ConsultationsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ConsultationsClient<$Result.GetResult<Prisma.$ConsultationsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Consultations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConsultationsFindFirstArgs} args - Arguments to find a Consultations
     * @example
     * // Get one Consultations
     * const consultations = await prisma.consultations.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ConsultationsFindFirstArgs>(args?: SelectSubset<T, ConsultationsFindFirstArgs<ExtArgs>>): Prisma__ConsultationsClient<$Result.GetResult<Prisma.$ConsultationsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Consultations that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConsultationsFindFirstOrThrowArgs} args - Arguments to find a Consultations
     * @example
     * // Get one Consultations
     * const consultations = await prisma.consultations.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ConsultationsFindFirstOrThrowArgs>(args?: SelectSubset<T, ConsultationsFindFirstOrThrowArgs<ExtArgs>>): Prisma__ConsultationsClient<$Result.GetResult<Prisma.$ConsultationsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Consultations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConsultationsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Consultations
     * const consultations = await prisma.consultations.findMany()
     * 
     * // Get first 10 Consultations
     * const consultations = await prisma.consultations.findMany({ take: 10 })
     * 
     * // Only select the `id_consultation`
     * const consultationsWithId_consultationOnly = await prisma.consultations.findMany({ select: { id_consultation: true } })
     * 
     */
    findMany<T extends ConsultationsFindManyArgs>(args?: SelectSubset<T, ConsultationsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConsultationsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Consultations.
     * @param {ConsultationsCreateArgs} args - Arguments to create a Consultations.
     * @example
     * // Create one Consultations
     * const Consultations = await prisma.consultations.create({
     *   data: {
     *     // ... data to create a Consultations
     *   }
     * })
     * 
     */
    create<T extends ConsultationsCreateArgs>(args: SelectSubset<T, ConsultationsCreateArgs<ExtArgs>>): Prisma__ConsultationsClient<$Result.GetResult<Prisma.$ConsultationsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Consultations.
     * @param {ConsultationsCreateManyArgs} args - Arguments to create many Consultations.
     * @example
     * // Create many Consultations
     * const consultations = await prisma.consultations.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ConsultationsCreateManyArgs>(args?: SelectSubset<T, ConsultationsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Consultations and returns the data saved in the database.
     * @param {ConsultationsCreateManyAndReturnArgs} args - Arguments to create many Consultations.
     * @example
     * // Create many Consultations
     * const consultations = await prisma.consultations.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Consultations and only return the `id_consultation`
     * const consultationsWithId_consultationOnly = await prisma.consultations.createManyAndReturn({
     *   select: { id_consultation: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ConsultationsCreateManyAndReturnArgs>(args?: SelectSubset<T, ConsultationsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConsultationsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Consultations.
     * @param {ConsultationsDeleteArgs} args - Arguments to delete one Consultations.
     * @example
     * // Delete one Consultations
     * const Consultations = await prisma.consultations.delete({
     *   where: {
     *     // ... filter to delete one Consultations
     *   }
     * })
     * 
     */
    delete<T extends ConsultationsDeleteArgs>(args: SelectSubset<T, ConsultationsDeleteArgs<ExtArgs>>): Prisma__ConsultationsClient<$Result.GetResult<Prisma.$ConsultationsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Consultations.
     * @param {ConsultationsUpdateArgs} args - Arguments to update one Consultations.
     * @example
     * // Update one Consultations
     * const consultations = await prisma.consultations.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ConsultationsUpdateArgs>(args: SelectSubset<T, ConsultationsUpdateArgs<ExtArgs>>): Prisma__ConsultationsClient<$Result.GetResult<Prisma.$ConsultationsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Consultations.
     * @param {ConsultationsDeleteManyArgs} args - Arguments to filter Consultations to delete.
     * @example
     * // Delete a few Consultations
     * const { count } = await prisma.consultations.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ConsultationsDeleteManyArgs>(args?: SelectSubset<T, ConsultationsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Consultations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConsultationsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Consultations
     * const consultations = await prisma.consultations.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ConsultationsUpdateManyArgs>(args: SelectSubset<T, ConsultationsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Consultations and returns the data updated in the database.
     * @param {ConsultationsUpdateManyAndReturnArgs} args - Arguments to update many Consultations.
     * @example
     * // Update many Consultations
     * const consultations = await prisma.consultations.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Consultations and only return the `id_consultation`
     * const consultationsWithId_consultationOnly = await prisma.consultations.updateManyAndReturn({
     *   select: { id_consultation: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ConsultationsUpdateManyAndReturnArgs>(args: SelectSubset<T, ConsultationsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConsultationsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Consultations.
     * @param {ConsultationsUpsertArgs} args - Arguments to update or create a Consultations.
     * @example
     * // Update or create a Consultations
     * const consultations = await prisma.consultations.upsert({
     *   create: {
     *     // ... data to create a Consultations
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Consultations we want to update
     *   }
     * })
     */
    upsert<T extends ConsultationsUpsertArgs>(args: SelectSubset<T, ConsultationsUpsertArgs<ExtArgs>>): Prisma__ConsultationsClient<$Result.GetResult<Prisma.$ConsultationsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Consultations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConsultationsCountArgs} args - Arguments to filter Consultations to count.
     * @example
     * // Count the number of Consultations
     * const count = await prisma.consultations.count({
     *   where: {
     *     // ... the filter for the Consultations we want to count
     *   }
     * })
    **/
    count<T extends ConsultationsCountArgs>(
      args?: Subset<T, ConsultationsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ConsultationsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Consultations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConsultationsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ConsultationsAggregateArgs>(args: Subset<T, ConsultationsAggregateArgs>): Prisma.PrismaPromise<GetConsultationsAggregateType<T>>

    /**
     * Group by Consultations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConsultationsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ConsultationsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ConsultationsGroupByArgs['orderBy'] }
        : { orderBy?: ConsultationsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ConsultationsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetConsultationsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Consultations model
   */
  readonly fields: ConsultationsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Consultations.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ConsultationsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    patient<T extends PatientsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PatientsDefaultArgs<ExtArgs>>): Prisma__PatientsClient<$Result.GetResult<Prisma.$PatientsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    medecin<T extends MedecinsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MedecinsDefaultArgs<ExtArgs>>): Prisma__MedecinsClient<$Result.GetResult<Prisma.$MedecinsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    fichiers<T extends Consultations$fichiersArgs<ExtArgs> = {}>(args?: Subset<T, Consultations$fichiersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FichiersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Consultations model
   */
  interface ConsultationsFieldRefs {
    readonly id_consultation: FieldRef<"Consultations", 'String'>
    readonly diagnostique: FieldRef<"Consultations", 'String'>
    readonly cree_le: FieldRef<"Consultations", 'DateTime'>
    readonly modifie_le: FieldRef<"Consultations", 'DateTime'>
    readonly id_patient: FieldRef<"Consultations", 'String'>
    readonly id_medecin: FieldRef<"Consultations", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Consultations findUnique
   */
  export type ConsultationsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Consultations
     */
    select?: ConsultationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Consultations
     */
    omit?: ConsultationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsultationsInclude<ExtArgs> | null
    /**
     * Filter, which Consultations to fetch.
     */
    where: ConsultationsWhereUniqueInput
  }

  /**
   * Consultations findUniqueOrThrow
   */
  export type ConsultationsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Consultations
     */
    select?: ConsultationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Consultations
     */
    omit?: ConsultationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsultationsInclude<ExtArgs> | null
    /**
     * Filter, which Consultations to fetch.
     */
    where: ConsultationsWhereUniqueInput
  }

  /**
   * Consultations findFirst
   */
  export type ConsultationsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Consultations
     */
    select?: ConsultationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Consultations
     */
    omit?: ConsultationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsultationsInclude<ExtArgs> | null
    /**
     * Filter, which Consultations to fetch.
     */
    where?: ConsultationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Consultations to fetch.
     */
    orderBy?: ConsultationsOrderByWithRelationInput | ConsultationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Consultations.
     */
    cursor?: ConsultationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Consultations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Consultations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Consultations.
     */
    distinct?: ConsultationsScalarFieldEnum | ConsultationsScalarFieldEnum[]
  }

  /**
   * Consultations findFirstOrThrow
   */
  export type ConsultationsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Consultations
     */
    select?: ConsultationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Consultations
     */
    omit?: ConsultationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsultationsInclude<ExtArgs> | null
    /**
     * Filter, which Consultations to fetch.
     */
    where?: ConsultationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Consultations to fetch.
     */
    orderBy?: ConsultationsOrderByWithRelationInput | ConsultationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Consultations.
     */
    cursor?: ConsultationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Consultations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Consultations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Consultations.
     */
    distinct?: ConsultationsScalarFieldEnum | ConsultationsScalarFieldEnum[]
  }

  /**
   * Consultations findMany
   */
  export type ConsultationsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Consultations
     */
    select?: ConsultationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Consultations
     */
    omit?: ConsultationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsultationsInclude<ExtArgs> | null
    /**
     * Filter, which Consultations to fetch.
     */
    where?: ConsultationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Consultations to fetch.
     */
    orderBy?: ConsultationsOrderByWithRelationInput | ConsultationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Consultations.
     */
    cursor?: ConsultationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Consultations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Consultations.
     */
    skip?: number
    distinct?: ConsultationsScalarFieldEnum | ConsultationsScalarFieldEnum[]
  }

  /**
   * Consultations create
   */
  export type ConsultationsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Consultations
     */
    select?: ConsultationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Consultations
     */
    omit?: ConsultationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsultationsInclude<ExtArgs> | null
    /**
     * The data needed to create a Consultations.
     */
    data: XOR<ConsultationsCreateInput, ConsultationsUncheckedCreateInput>
  }

  /**
   * Consultations createMany
   */
  export type ConsultationsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Consultations.
     */
    data: ConsultationsCreateManyInput | ConsultationsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Consultations createManyAndReturn
   */
  export type ConsultationsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Consultations
     */
    select?: ConsultationsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Consultations
     */
    omit?: ConsultationsOmit<ExtArgs> | null
    /**
     * The data used to create many Consultations.
     */
    data: ConsultationsCreateManyInput | ConsultationsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsultationsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Consultations update
   */
  export type ConsultationsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Consultations
     */
    select?: ConsultationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Consultations
     */
    omit?: ConsultationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsultationsInclude<ExtArgs> | null
    /**
     * The data needed to update a Consultations.
     */
    data: XOR<ConsultationsUpdateInput, ConsultationsUncheckedUpdateInput>
    /**
     * Choose, which Consultations to update.
     */
    where: ConsultationsWhereUniqueInput
  }

  /**
   * Consultations updateMany
   */
  export type ConsultationsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Consultations.
     */
    data: XOR<ConsultationsUpdateManyMutationInput, ConsultationsUncheckedUpdateManyInput>
    /**
     * Filter which Consultations to update
     */
    where?: ConsultationsWhereInput
    /**
     * Limit how many Consultations to update.
     */
    limit?: number
  }

  /**
   * Consultations updateManyAndReturn
   */
  export type ConsultationsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Consultations
     */
    select?: ConsultationsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Consultations
     */
    omit?: ConsultationsOmit<ExtArgs> | null
    /**
     * The data used to update Consultations.
     */
    data: XOR<ConsultationsUpdateManyMutationInput, ConsultationsUncheckedUpdateManyInput>
    /**
     * Filter which Consultations to update
     */
    where?: ConsultationsWhereInput
    /**
     * Limit how many Consultations to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsultationsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Consultations upsert
   */
  export type ConsultationsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Consultations
     */
    select?: ConsultationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Consultations
     */
    omit?: ConsultationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsultationsInclude<ExtArgs> | null
    /**
     * The filter to search for the Consultations to update in case it exists.
     */
    where: ConsultationsWhereUniqueInput
    /**
     * In case the Consultations found by the `where` argument doesn't exist, create a new Consultations with this data.
     */
    create: XOR<ConsultationsCreateInput, ConsultationsUncheckedCreateInput>
    /**
     * In case the Consultations was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ConsultationsUpdateInput, ConsultationsUncheckedUpdateInput>
  }

  /**
   * Consultations delete
   */
  export type ConsultationsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Consultations
     */
    select?: ConsultationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Consultations
     */
    omit?: ConsultationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsultationsInclude<ExtArgs> | null
    /**
     * Filter which Consultations to delete.
     */
    where: ConsultationsWhereUniqueInput
  }

  /**
   * Consultations deleteMany
   */
  export type ConsultationsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Consultations to delete
     */
    where?: ConsultationsWhereInput
    /**
     * Limit how many Consultations to delete.
     */
    limit?: number
  }

  /**
   * Consultations.fichiers
   */
  export type Consultations$fichiersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fichiers
     */
    select?: FichiersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fichiers
     */
    omit?: FichiersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FichiersInclude<ExtArgs> | null
    where?: FichiersWhereInput
    orderBy?: FichiersOrderByWithRelationInput | FichiersOrderByWithRelationInput[]
    cursor?: FichiersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FichiersScalarFieldEnum | FichiersScalarFieldEnum[]
  }

  /**
   * Consultations without action
   */
  export type ConsultationsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Consultations
     */
    select?: ConsultationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Consultations
     */
    omit?: ConsultationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsultationsInclude<ExtArgs> | null
  }


  /**
   * Model Fichiers
   */

  export type AggregateFichiers = {
    _count: FichiersCountAggregateOutputType | null
    _min: FichiersMinAggregateOutputType | null
    _max: FichiersMaxAggregateOutputType | null
  }

  export type FichiersMinAggregateOutputType = {
    id_fichier: string | null
    lien_fichier: string | null
    cree_le: Date | null
    modifie_le: Date | null
    id_consultation: string | null
  }

  export type FichiersMaxAggregateOutputType = {
    id_fichier: string | null
    lien_fichier: string | null
    cree_le: Date | null
    modifie_le: Date | null
    id_consultation: string | null
  }

  export type FichiersCountAggregateOutputType = {
    id_fichier: number
    lien_fichier: number
    cree_le: number
    modifie_le: number
    id_consultation: number
    _all: number
  }


  export type FichiersMinAggregateInputType = {
    id_fichier?: true
    lien_fichier?: true
    cree_le?: true
    modifie_le?: true
    id_consultation?: true
  }

  export type FichiersMaxAggregateInputType = {
    id_fichier?: true
    lien_fichier?: true
    cree_le?: true
    modifie_le?: true
    id_consultation?: true
  }

  export type FichiersCountAggregateInputType = {
    id_fichier?: true
    lien_fichier?: true
    cree_le?: true
    modifie_le?: true
    id_consultation?: true
    _all?: true
  }

  export type FichiersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Fichiers to aggregate.
     */
    where?: FichiersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Fichiers to fetch.
     */
    orderBy?: FichiersOrderByWithRelationInput | FichiersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FichiersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Fichiers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Fichiers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Fichiers
    **/
    _count?: true | FichiersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FichiersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FichiersMaxAggregateInputType
  }

  export type GetFichiersAggregateType<T extends FichiersAggregateArgs> = {
        [P in keyof T & keyof AggregateFichiers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFichiers[P]>
      : GetScalarType<T[P], AggregateFichiers[P]>
  }




  export type FichiersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FichiersWhereInput
    orderBy?: FichiersOrderByWithAggregationInput | FichiersOrderByWithAggregationInput[]
    by: FichiersScalarFieldEnum[] | FichiersScalarFieldEnum
    having?: FichiersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FichiersCountAggregateInputType | true
    _min?: FichiersMinAggregateInputType
    _max?: FichiersMaxAggregateInputType
  }

  export type FichiersGroupByOutputType = {
    id_fichier: string
    lien_fichier: string
    cree_le: Date
    modifie_le: Date
    id_consultation: string
    _count: FichiersCountAggregateOutputType | null
    _min: FichiersMinAggregateOutputType | null
    _max: FichiersMaxAggregateOutputType | null
  }

  type GetFichiersGroupByPayload<T extends FichiersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FichiersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FichiersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FichiersGroupByOutputType[P]>
            : GetScalarType<T[P], FichiersGroupByOutputType[P]>
        }
      >
    >


  export type FichiersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_fichier?: boolean
    lien_fichier?: boolean
    cree_le?: boolean
    modifie_le?: boolean
    id_consultation?: boolean
    consultations?: boolean | ConsultationsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["fichiers"]>

  export type FichiersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_fichier?: boolean
    lien_fichier?: boolean
    cree_le?: boolean
    modifie_le?: boolean
    id_consultation?: boolean
    consultations?: boolean | ConsultationsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["fichiers"]>

  export type FichiersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_fichier?: boolean
    lien_fichier?: boolean
    cree_le?: boolean
    modifie_le?: boolean
    id_consultation?: boolean
    consultations?: boolean | ConsultationsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["fichiers"]>

  export type FichiersSelectScalar = {
    id_fichier?: boolean
    lien_fichier?: boolean
    cree_le?: boolean
    modifie_le?: boolean
    id_consultation?: boolean
  }

  export type FichiersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_fichier" | "lien_fichier" | "cree_le" | "modifie_le" | "id_consultation", ExtArgs["result"]["fichiers"]>
  export type FichiersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    consultations?: boolean | ConsultationsDefaultArgs<ExtArgs>
  }
  export type FichiersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    consultations?: boolean | ConsultationsDefaultArgs<ExtArgs>
  }
  export type FichiersIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    consultations?: boolean | ConsultationsDefaultArgs<ExtArgs>
  }

  export type $FichiersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Fichiers"
    objects: {
      consultations: Prisma.$ConsultationsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id_fichier: string
      lien_fichier: string
      cree_le: Date
      modifie_le: Date
      id_consultation: string
    }, ExtArgs["result"]["fichiers"]>
    composites: {}
  }

  type FichiersGetPayload<S extends boolean | null | undefined | FichiersDefaultArgs> = $Result.GetResult<Prisma.$FichiersPayload, S>

  type FichiersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FichiersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FichiersCountAggregateInputType | true
    }

  export interface FichiersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Fichiers'], meta: { name: 'Fichiers' } }
    /**
     * Find zero or one Fichiers that matches the filter.
     * @param {FichiersFindUniqueArgs} args - Arguments to find a Fichiers
     * @example
     * // Get one Fichiers
     * const fichiers = await prisma.fichiers.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FichiersFindUniqueArgs>(args: SelectSubset<T, FichiersFindUniqueArgs<ExtArgs>>): Prisma__FichiersClient<$Result.GetResult<Prisma.$FichiersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Fichiers that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FichiersFindUniqueOrThrowArgs} args - Arguments to find a Fichiers
     * @example
     * // Get one Fichiers
     * const fichiers = await prisma.fichiers.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FichiersFindUniqueOrThrowArgs>(args: SelectSubset<T, FichiersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FichiersClient<$Result.GetResult<Prisma.$FichiersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Fichiers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FichiersFindFirstArgs} args - Arguments to find a Fichiers
     * @example
     * // Get one Fichiers
     * const fichiers = await prisma.fichiers.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FichiersFindFirstArgs>(args?: SelectSubset<T, FichiersFindFirstArgs<ExtArgs>>): Prisma__FichiersClient<$Result.GetResult<Prisma.$FichiersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Fichiers that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FichiersFindFirstOrThrowArgs} args - Arguments to find a Fichiers
     * @example
     * // Get one Fichiers
     * const fichiers = await prisma.fichiers.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FichiersFindFirstOrThrowArgs>(args?: SelectSubset<T, FichiersFindFirstOrThrowArgs<ExtArgs>>): Prisma__FichiersClient<$Result.GetResult<Prisma.$FichiersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Fichiers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FichiersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Fichiers
     * const fichiers = await prisma.fichiers.findMany()
     * 
     * // Get first 10 Fichiers
     * const fichiers = await prisma.fichiers.findMany({ take: 10 })
     * 
     * // Only select the `id_fichier`
     * const fichiersWithId_fichierOnly = await prisma.fichiers.findMany({ select: { id_fichier: true } })
     * 
     */
    findMany<T extends FichiersFindManyArgs>(args?: SelectSubset<T, FichiersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FichiersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Fichiers.
     * @param {FichiersCreateArgs} args - Arguments to create a Fichiers.
     * @example
     * // Create one Fichiers
     * const Fichiers = await prisma.fichiers.create({
     *   data: {
     *     // ... data to create a Fichiers
     *   }
     * })
     * 
     */
    create<T extends FichiersCreateArgs>(args: SelectSubset<T, FichiersCreateArgs<ExtArgs>>): Prisma__FichiersClient<$Result.GetResult<Prisma.$FichiersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Fichiers.
     * @param {FichiersCreateManyArgs} args - Arguments to create many Fichiers.
     * @example
     * // Create many Fichiers
     * const fichiers = await prisma.fichiers.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FichiersCreateManyArgs>(args?: SelectSubset<T, FichiersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Fichiers and returns the data saved in the database.
     * @param {FichiersCreateManyAndReturnArgs} args - Arguments to create many Fichiers.
     * @example
     * // Create many Fichiers
     * const fichiers = await prisma.fichiers.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Fichiers and only return the `id_fichier`
     * const fichiersWithId_fichierOnly = await prisma.fichiers.createManyAndReturn({
     *   select: { id_fichier: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FichiersCreateManyAndReturnArgs>(args?: SelectSubset<T, FichiersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FichiersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Fichiers.
     * @param {FichiersDeleteArgs} args - Arguments to delete one Fichiers.
     * @example
     * // Delete one Fichiers
     * const Fichiers = await prisma.fichiers.delete({
     *   where: {
     *     // ... filter to delete one Fichiers
     *   }
     * })
     * 
     */
    delete<T extends FichiersDeleteArgs>(args: SelectSubset<T, FichiersDeleteArgs<ExtArgs>>): Prisma__FichiersClient<$Result.GetResult<Prisma.$FichiersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Fichiers.
     * @param {FichiersUpdateArgs} args - Arguments to update one Fichiers.
     * @example
     * // Update one Fichiers
     * const fichiers = await prisma.fichiers.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FichiersUpdateArgs>(args: SelectSubset<T, FichiersUpdateArgs<ExtArgs>>): Prisma__FichiersClient<$Result.GetResult<Prisma.$FichiersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Fichiers.
     * @param {FichiersDeleteManyArgs} args - Arguments to filter Fichiers to delete.
     * @example
     * // Delete a few Fichiers
     * const { count } = await prisma.fichiers.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FichiersDeleteManyArgs>(args?: SelectSubset<T, FichiersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Fichiers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FichiersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Fichiers
     * const fichiers = await prisma.fichiers.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FichiersUpdateManyArgs>(args: SelectSubset<T, FichiersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Fichiers and returns the data updated in the database.
     * @param {FichiersUpdateManyAndReturnArgs} args - Arguments to update many Fichiers.
     * @example
     * // Update many Fichiers
     * const fichiers = await prisma.fichiers.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Fichiers and only return the `id_fichier`
     * const fichiersWithId_fichierOnly = await prisma.fichiers.updateManyAndReturn({
     *   select: { id_fichier: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends FichiersUpdateManyAndReturnArgs>(args: SelectSubset<T, FichiersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FichiersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Fichiers.
     * @param {FichiersUpsertArgs} args - Arguments to update or create a Fichiers.
     * @example
     * // Update or create a Fichiers
     * const fichiers = await prisma.fichiers.upsert({
     *   create: {
     *     // ... data to create a Fichiers
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Fichiers we want to update
     *   }
     * })
     */
    upsert<T extends FichiersUpsertArgs>(args: SelectSubset<T, FichiersUpsertArgs<ExtArgs>>): Prisma__FichiersClient<$Result.GetResult<Prisma.$FichiersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Fichiers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FichiersCountArgs} args - Arguments to filter Fichiers to count.
     * @example
     * // Count the number of Fichiers
     * const count = await prisma.fichiers.count({
     *   where: {
     *     // ... the filter for the Fichiers we want to count
     *   }
     * })
    **/
    count<T extends FichiersCountArgs>(
      args?: Subset<T, FichiersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FichiersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Fichiers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FichiersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FichiersAggregateArgs>(args: Subset<T, FichiersAggregateArgs>): Prisma.PrismaPromise<GetFichiersAggregateType<T>>

    /**
     * Group by Fichiers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FichiersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FichiersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FichiersGroupByArgs['orderBy'] }
        : { orderBy?: FichiersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FichiersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFichiersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Fichiers model
   */
  readonly fields: FichiersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Fichiers.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FichiersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    consultations<T extends ConsultationsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ConsultationsDefaultArgs<ExtArgs>>): Prisma__ConsultationsClient<$Result.GetResult<Prisma.$ConsultationsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Fichiers model
   */
  interface FichiersFieldRefs {
    readonly id_fichier: FieldRef<"Fichiers", 'String'>
    readonly lien_fichier: FieldRef<"Fichiers", 'String'>
    readonly cree_le: FieldRef<"Fichiers", 'DateTime'>
    readonly modifie_le: FieldRef<"Fichiers", 'DateTime'>
    readonly id_consultation: FieldRef<"Fichiers", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Fichiers findUnique
   */
  export type FichiersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fichiers
     */
    select?: FichiersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fichiers
     */
    omit?: FichiersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FichiersInclude<ExtArgs> | null
    /**
     * Filter, which Fichiers to fetch.
     */
    where: FichiersWhereUniqueInput
  }

  /**
   * Fichiers findUniqueOrThrow
   */
  export type FichiersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fichiers
     */
    select?: FichiersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fichiers
     */
    omit?: FichiersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FichiersInclude<ExtArgs> | null
    /**
     * Filter, which Fichiers to fetch.
     */
    where: FichiersWhereUniqueInput
  }

  /**
   * Fichiers findFirst
   */
  export type FichiersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fichiers
     */
    select?: FichiersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fichiers
     */
    omit?: FichiersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FichiersInclude<ExtArgs> | null
    /**
     * Filter, which Fichiers to fetch.
     */
    where?: FichiersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Fichiers to fetch.
     */
    orderBy?: FichiersOrderByWithRelationInput | FichiersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Fichiers.
     */
    cursor?: FichiersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Fichiers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Fichiers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Fichiers.
     */
    distinct?: FichiersScalarFieldEnum | FichiersScalarFieldEnum[]
  }

  /**
   * Fichiers findFirstOrThrow
   */
  export type FichiersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fichiers
     */
    select?: FichiersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fichiers
     */
    omit?: FichiersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FichiersInclude<ExtArgs> | null
    /**
     * Filter, which Fichiers to fetch.
     */
    where?: FichiersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Fichiers to fetch.
     */
    orderBy?: FichiersOrderByWithRelationInput | FichiersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Fichiers.
     */
    cursor?: FichiersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Fichiers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Fichiers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Fichiers.
     */
    distinct?: FichiersScalarFieldEnum | FichiersScalarFieldEnum[]
  }

  /**
   * Fichiers findMany
   */
  export type FichiersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fichiers
     */
    select?: FichiersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fichiers
     */
    omit?: FichiersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FichiersInclude<ExtArgs> | null
    /**
     * Filter, which Fichiers to fetch.
     */
    where?: FichiersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Fichiers to fetch.
     */
    orderBy?: FichiersOrderByWithRelationInput | FichiersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Fichiers.
     */
    cursor?: FichiersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Fichiers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Fichiers.
     */
    skip?: number
    distinct?: FichiersScalarFieldEnum | FichiersScalarFieldEnum[]
  }

  /**
   * Fichiers create
   */
  export type FichiersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fichiers
     */
    select?: FichiersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fichiers
     */
    omit?: FichiersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FichiersInclude<ExtArgs> | null
    /**
     * The data needed to create a Fichiers.
     */
    data: XOR<FichiersCreateInput, FichiersUncheckedCreateInput>
  }

  /**
   * Fichiers createMany
   */
  export type FichiersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Fichiers.
     */
    data: FichiersCreateManyInput | FichiersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Fichiers createManyAndReturn
   */
  export type FichiersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fichiers
     */
    select?: FichiersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Fichiers
     */
    omit?: FichiersOmit<ExtArgs> | null
    /**
     * The data used to create many Fichiers.
     */
    data: FichiersCreateManyInput | FichiersCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FichiersIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Fichiers update
   */
  export type FichiersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fichiers
     */
    select?: FichiersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fichiers
     */
    omit?: FichiersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FichiersInclude<ExtArgs> | null
    /**
     * The data needed to update a Fichiers.
     */
    data: XOR<FichiersUpdateInput, FichiersUncheckedUpdateInput>
    /**
     * Choose, which Fichiers to update.
     */
    where: FichiersWhereUniqueInput
  }

  /**
   * Fichiers updateMany
   */
  export type FichiersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Fichiers.
     */
    data: XOR<FichiersUpdateManyMutationInput, FichiersUncheckedUpdateManyInput>
    /**
     * Filter which Fichiers to update
     */
    where?: FichiersWhereInput
    /**
     * Limit how many Fichiers to update.
     */
    limit?: number
  }

  /**
   * Fichiers updateManyAndReturn
   */
  export type FichiersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fichiers
     */
    select?: FichiersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Fichiers
     */
    omit?: FichiersOmit<ExtArgs> | null
    /**
     * The data used to update Fichiers.
     */
    data: XOR<FichiersUpdateManyMutationInput, FichiersUncheckedUpdateManyInput>
    /**
     * Filter which Fichiers to update
     */
    where?: FichiersWhereInput
    /**
     * Limit how many Fichiers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FichiersIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Fichiers upsert
   */
  export type FichiersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fichiers
     */
    select?: FichiersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fichiers
     */
    omit?: FichiersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FichiersInclude<ExtArgs> | null
    /**
     * The filter to search for the Fichiers to update in case it exists.
     */
    where: FichiersWhereUniqueInput
    /**
     * In case the Fichiers found by the `where` argument doesn't exist, create a new Fichiers with this data.
     */
    create: XOR<FichiersCreateInput, FichiersUncheckedCreateInput>
    /**
     * In case the Fichiers was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FichiersUpdateInput, FichiersUncheckedUpdateInput>
  }

  /**
   * Fichiers delete
   */
  export type FichiersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fichiers
     */
    select?: FichiersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fichiers
     */
    omit?: FichiersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FichiersInclude<ExtArgs> | null
    /**
     * Filter which Fichiers to delete.
     */
    where: FichiersWhereUniqueInput
  }

  /**
   * Fichiers deleteMany
   */
  export type FichiersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Fichiers to delete
     */
    where?: FichiersWhereInput
    /**
     * Limit how many Fichiers to delete.
     */
    limit?: number
  }

  /**
   * Fichiers without action
   */
  export type FichiersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fichiers
     */
    select?: FichiersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fichiers
     */
    omit?: FichiersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FichiersInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    email: 'email',
    name: 'name',
    postnom: 'postnom',
    prenom: 'prenom',
    slug: 'slug',
    numero_telephone: 'numero_telephone',
    date_de_naissance: 'date_de_naissance',
    adresse_residence: 'adresse_residence',
    emailVerified: 'emailVerified',
    image: 'image',
    sexe: 'sexe',
    updatedAt: 'updatedAt',
    is_active: 'is_active',
    role: 'role',
    banned: 'banned',
    banReason: 'banReason',
    banExpires: 'banExpires'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const SessionScalarFieldEnum: {
    id: 'id',
    expiresAt: 'expiresAt',
    token: 'token',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    ipAddress: 'ipAddress',
    userAgent: 'userAgent',
    userId: 'userId',
    impersonatedBy: 'impersonatedBy'
  };

  export type SessionScalarFieldEnum = (typeof SessionScalarFieldEnum)[keyof typeof SessionScalarFieldEnum]


  export const AccountScalarFieldEnum: {
    id: 'id',
    accountId: 'accountId',
    providerId: 'providerId',
    userId: 'userId',
    accessToken: 'accessToken',
    refreshToken: 'refreshToken',
    idToken: 'idToken',
    accessTokenExpiresAt: 'accessTokenExpiresAt',
    refreshTokenExpiresAt: 'refreshTokenExpiresAt',
    scope: 'scope',
    password: 'password',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AccountScalarFieldEnum = (typeof AccountScalarFieldEnum)[keyof typeof AccountScalarFieldEnum]


  export const VerificationScalarFieldEnum: {
    id: 'id',
    identifier: 'identifier',
    value: 'value',
    expiresAt: 'expiresAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type VerificationScalarFieldEnum = (typeof VerificationScalarFieldEnum)[keyof typeof VerificationScalarFieldEnum]


  export const SignalementsScalarFieldEnum: {
    id: 'id',
    sujet: 'sujet',
    message: 'message',
    cree_le: 'cree_le',
    modifie_le: 'modifie_le',
    userId: 'userId'
  };

  export type SignalementsScalarFieldEnum = (typeof SignalementsScalarFieldEnum)[keyof typeof SignalementsScalarFieldEnum]


  export const PatientsScalarFieldEnum: {
    id_patient: 'id_patient',
    cree_le: 'cree_le',
    modifie_le: 'modifie_le',
    userId: 'userId'
  };

  export type PatientsScalarFieldEnum = (typeof PatientsScalarFieldEnum)[keyof typeof PatientsScalarFieldEnum]


  export const MedecinsScalarFieldEnum: {
    id_medecin: 'id_medecin',
    specialite: 'specialite',
    description: 'description',
    nombre_signalement: 'nombre_signalement',
    cree_le: 'cree_le',
    modifie_le: 'modifie_le',
    userId: 'userId'
  };

  export type MedecinsScalarFieldEnum = (typeof MedecinsScalarFieldEnum)[keyof typeof MedecinsScalarFieldEnum]


  export const RendezVousScalarFieldEnum: {
    id_rdv: 'id_rdv',
    motif: 'motif',
    cree_le: 'cree_le',
    status: 'status',
    modifie_le: 'modifie_le',
    id_patient: 'id_patient',
    id_medecin: 'id_medecin'
  };

  export type RendezVousScalarFieldEnum = (typeof RendezVousScalarFieldEnum)[keyof typeof RendezVousScalarFieldEnum]


  export const PostsScalarFieldEnum: {
    id_post: 'id_post',
    slug: 'slug',
    titre: 'titre',
    description: 'description',
    lien_image: 'lien_image',
    star: 'star',
    nombre_aime: 'nombre_aime',
    nombre_non_aime: 'nombre_non_aime',
    nombre_vue: 'nombre_vue',
    cree_le: 'cree_le',
    modifie_le: 'modifie_le',
    id_medecin: 'id_medecin'
  };

  export type PostsScalarFieldEnum = (typeof PostsScalarFieldEnum)[keyof typeof PostsScalarFieldEnum]


  export const CommentairesScalarFieldEnum: {
    id_commentaire: 'id_commentaire',
    commentaire: 'commentaire',
    cree_le: 'cree_le',
    modifie_le: 'modifie_le',
    id_post: 'id_post'
  };

  export type CommentairesScalarFieldEnum = (typeof CommentairesScalarFieldEnum)[keyof typeof CommentairesScalarFieldEnum]


  export const ConsultationsScalarFieldEnum: {
    id_consultation: 'id_consultation',
    diagnostique: 'diagnostique',
    cree_le: 'cree_le',
    modifie_le: 'modifie_le',
    id_patient: 'id_patient',
    id_medecin: 'id_medecin'
  };

  export type ConsultationsScalarFieldEnum = (typeof ConsultationsScalarFieldEnum)[keyof typeof ConsultationsScalarFieldEnum]


  export const FichiersScalarFieldEnum: {
    id_fichier: 'id_fichier',
    lien_fichier: 'lien_fichier',
    cree_le: 'cree_le',
    modifie_le: 'modifie_le',
    id_consultation: 'id_consultation'
  };

  export type FichiersScalarFieldEnum = (typeof FichiersScalarFieldEnum)[keyof typeof FichiersScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'SEXE'
   */
  export type EnumSEXEFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SEXE'>
    


  /**
   * Reference to a field of type 'SEXE[]'
   */
  export type ListEnumSEXEFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SEXE[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'StatusRvd'
   */
  export type EnumStatusRvdFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StatusRvd'>
    


  /**
   * Reference to a field of type 'StatusRvd[]'
   */
  export type ListEnumStatusRvdFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StatusRvd[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    email?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    postnom?: StringNullableFilter<"User"> | string | null
    prenom?: StringNullableFilter<"User"> | string | null
    slug?: StringNullableFilter<"User"> | string | null
    numero_telephone?: StringNullableFilter<"User"> | string | null
    date_de_naissance?: DateTimeNullableFilter<"User"> | Date | string | null
    adresse_residence?: StringNullableFilter<"User"> | string | null
    emailVerified?: BoolFilter<"User"> | boolean
    image?: StringNullableFilter<"User"> | string | null
    sexe?: EnumSEXENullableFilter<"User"> | $Enums.SEXE | null
    updatedAt?: DateTimeFilter<"User"> | Date | string
    is_active?: BoolFilter<"User"> | boolean
    role?: StringNullableFilter<"User"> | string | null
    banned?: BoolNullableFilter<"User"> | boolean | null
    banReason?: StringNullableFilter<"User"> | string | null
    banExpires?: DateTimeNullableFilter<"User"> | Date | string | null
    sessions?: SessionListRelationFilter
    accounts?: AccountListRelationFilter
    signalements?: SignalementsListRelationFilter
    patient?: PatientsListRelationFilter
    medecin?: MedecinsListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    email?: SortOrder
    name?: SortOrderInput | SortOrder
    postnom?: SortOrderInput | SortOrder
    prenom?: SortOrderInput | SortOrder
    slug?: SortOrderInput | SortOrder
    numero_telephone?: SortOrderInput | SortOrder
    date_de_naissance?: SortOrderInput | SortOrder
    adresse_residence?: SortOrderInput | SortOrder
    emailVerified?: SortOrder
    image?: SortOrderInput | SortOrder
    sexe?: SortOrderInput | SortOrder
    updatedAt?: SortOrder
    is_active?: SortOrder
    role?: SortOrderInput | SortOrder
    banned?: SortOrderInput | SortOrder
    banReason?: SortOrderInput | SortOrder
    banExpires?: SortOrderInput | SortOrder
    sessions?: SessionOrderByRelationAggregateInput
    accounts?: AccountOrderByRelationAggregateInput
    signalements?: SignalementsOrderByRelationAggregateInput
    patient?: PatientsOrderByRelationAggregateInput
    medecin?: MedecinsOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    slug?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    createdAt?: DateTimeFilter<"User"> | Date | string
    name?: StringNullableFilter<"User"> | string | null
    postnom?: StringNullableFilter<"User"> | string | null
    prenom?: StringNullableFilter<"User"> | string | null
    numero_telephone?: StringNullableFilter<"User"> | string | null
    date_de_naissance?: DateTimeNullableFilter<"User"> | Date | string | null
    adresse_residence?: StringNullableFilter<"User"> | string | null
    emailVerified?: BoolFilter<"User"> | boolean
    image?: StringNullableFilter<"User"> | string | null
    sexe?: EnumSEXENullableFilter<"User"> | $Enums.SEXE | null
    updatedAt?: DateTimeFilter<"User"> | Date | string
    is_active?: BoolFilter<"User"> | boolean
    role?: StringNullableFilter<"User"> | string | null
    banned?: BoolNullableFilter<"User"> | boolean | null
    banReason?: StringNullableFilter<"User"> | string | null
    banExpires?: DateTimeNullableFilter<"User"> | Date | string | null
    sessions?: SessionListRelationFilter
    accounts?: AccountListRelationFilter
    signalements?: SignalementsListRelationFilter
    patient?: PatientsListRelationFilter
    medecin?: MedecinsListRelationFilter
  }, "id" | "email" | "slug">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    email?: SortOrder
    name?: SortOrderInput | SortOrder
    postnom?: SortOrderInput | SortOrder
    prenom?: SortOrderInput | SortOrder
    slug?: SortOrderInput | SortOrder
    numero_telephone?: SortOrderInput | SortOrder
    date_de_naissance?: SortOrderInput | SortOrder
    adresse_residence?: SortOrderInput | SortOrder
    emailVerified?: SortOrder
    image?: SortOrderInput | SortOrder
    sexe?: SortOrderInput | SortOrder
    updatedAt?: SortOrder
    is_active?: SortOrder
    role?: SortOrderInput | SortOrder
    banned?: SortOrderInput | SortOrder
    banReason?: SortOrderInput | SortOrder
    banExpires?: SortOrderInput | SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    email?: StringWithAggregatesFilter<"User"> | string
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    postnom?: StringNullableWithAggregatesFilter<"User"> | string | null
    prenom?: StringNullableWithAggregatesFilter<"User"> | string | null
    slug?: StringNullableWithAggregatesFilter<"User"> | string | null
    numero_telephone?: StringNullableWithAggregatesFilter<"User"> | string | null
    date_de_naissance?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    adresse_residence?: StringNullableWithAggregatesFilter<"User"> | string | null
    emailVerified?: BoolWithAggregatesFilter<"User"> | boolean
    image?: StringNullableWithAggregatesFilter<"User"> | string | null
    sexe?: EnumSEXENullableWithAggregatesFilter<"User"> | $Enums.SEXE | null
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    is_active?: BoolWithAggregatesFilter<"User"> | boolean
    role?: StringNullableWithAggregatesFilter<"User"> | string | null
    banned?: BoolNullableWithAggregatesFilter<"User"> | boolean | null
    banReason?: StringNullableWithAggregatesFilter<"User"> | string | null
    banExpires?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
  }

  export type SessionWhereInput = {
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    id?: StringFilter<"Session"> | string
    expiresAt?: DateTimeFilter<"Session"> | Date | string
    token?: StringFilter<"Session"> | string
    createdAt?: DateTimeFilter<"Session"> | Date | string
    updatedAt?: DateTimeFilter<"Session"> | Date | string
    ipAddress?: StringNullableFilter<"Session"> | string | null
    userAgent?: StringNullableFilter<"Session"> | string | null
    userId?: StringFilter<"Session"> | string
    impersonatedBy?: StringNullableFilter<"Session"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type SessionOrderByWithRelationInput = {
    id?: SortOrder
    expiresAt?: SortOrder
    token?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ipAddress?: SortOrderInput | SortOrder
    userAgent?: SortOrderInput | SortOrder
    userId?: SortOrder
    impersonatedBy?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type SessionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    token?: string
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    expiresAt?: DateTimeFilter<"Session"> | Date | string
    createdAt?: DateTimeFilter<"Session"> | Date | string
    updatedAt?: DateTimeFilter<"Session"> | Date | string
    ipAddress?: StringNullableFilter<"Session"> | string | null
    userAgent?: StringNullableFilter<"Session"> | string | null
    userId?: StringFilter<"Session"> | string
    impersonatedBy?: StringNullableFilter<"Session"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "token">

  export type SessionOrderByWithAggregationInput = {
    id?: SortOrder
    expiresAt?: SortOrder
    token?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ipAddress?: SortOrderInput | SortOrder
    userAgent?: SortOrderInput | SortOrder
    userId?: SortOrder
    impersonatedBy?: SortOrderInput | SortOrder
    _count?: SessionCountOrderByAggregateInput
    _max?: SessionMaxOrderByAggregateInput
    _min?: SessionMinOrderByAggregateInput
  }

  export type SessionScalarWhereWithAggregatesInput = {
    AND?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    OR?: SessionScalarWhereWithAggregatesInput[]
    NOT?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Session"> | string
    expiresAt?: DateTimeWithAggregatesFilter<"Session"> | Date | string
    token?: StringWithAggregatesFilter<"Session"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Session"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Session"> | Date | string
    ipAddress?: StringNullableWithAggregatesFilter<"Session"> | string | null
    userAgent?: StringNullableWithAggregatesFilter<"Session"> | string | null
    userId?: StringWithAggregatesFilter<"Session"> | string
    impersonatedBy?: StringNullableWithAggregatesFilter<"Session"> | string | null
  }

  export type AccountWhereInput = {
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    id?: StringFilter<"Account"> | string
    accountId?: StringFilter<"Account"> | string
    providerId?: StringFilter<"Account"> | string
    userId?: StringFilter<"Account"> | string
    accessToken?: StringNullableFilter<"Account"> | string | null
    refreshToken?: StringNullableFilter<"Account"> | string | null
    idToken?: StringNullableFilter<"Account"> | string | null
    accessTokenExpiresAt?: DateTimeNullableFilter<"Account"> | Date | string | null
    refreshTokenExpiresAt?: DateTimeNullableFilter<"Account"> | Date | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    password?: StringNullableFilter<"Account"> | string | null
    createdAt?: DateTimeFilter<"Account"> | Date | string
    updatedAt?: DateTimeFilter<"Account"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type AccountOrderByWithRelationInput = {
    id?: SortOrder
    accountId?: SortOrder
    providerId?: SortOrder
    userId?: SortOrder
    accessToken?: SortOrderInput | SortOrder
    refreshToken?: SortOrderInput | SortOrder
    idToken?: SortOrderInput | SortOrder
    accessTokenExpiresAt?: SortOrderInput | SortOrder
    refreshTokenExpiresAt?: SortOrderInput | SortOrder
    scope?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type AccountWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    accountId?: StringFilter<"Account"> | string
    providerId?: StringFilter<"Account"> | string
    userId?: StringFilter<"Account"> | string
    accessToken?: StringNullableFilter<"Account"> | string | null
    refreshToken?: StringNullableFilter<"Account"> | string | null
    idToken?: StringNullableFilter<"Account"> | string | null
    accessTokenExpiresAt?: DateTimeNullableFilter<"Account"> | Date | string | null
    refreshTokenExpiresAt?: DateTimeNullableFilter<"Account"> | Date | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    password?: StringNullableFilter<"Account"> | string | null
    createdAt?: DateTimeFilter<"Account"> | Date | string
    updatedAt?: DateTimeFilter<"Account"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type AccountOrderByWithAggregationInput = {
    id?: SortOrder
    accountId?: SortOrder
    providerId?: SortOrder
    userId?: SortOrder
    accessToken?: SortOrderInput | SortOrder
    refreshToken?: SortOrderInput | SortOrder
    idToken?: SortOrderInput | SortOrder
    accessTokenExpiresAt?: SortOrderInput | SortOrder
    refreshTokenExpiresAt?: SortOrderInput | SortOrder
    scope?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AccountCountOrderByAggregateInput
    _max?: AccountMaxOrderByAggregateInput
    _min?: AccountMinOrderByAggregateInput
  }

  export type AccountScalarWhereWithAggregatesInput = {
    AND?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
    OR?: AccountScalarWhereWithAggregatesInput[]
    NOT?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Account"> | string
    accountId?: StringWithAggregatesFilter<"Account"> | string
    providerId?: StringWithAggregatesFilter<"Account"> | string
    userId?: StringWithAggregatesFilter<"Account"> | string
    accessToken?: StringNullableWithAggregatesFilter<"Account"> | string | null
    refreshToken?: StringNullableWithAggregatesFilter<"Account"> | string | null
    idToken?: StringNullableWithAggregatesFilter<"Account"> | string | null
    accessTokenExpiresAt?: DateTimeNullableWithAggregatesFilter<"Account"> | Date | string | null
    refreshTokenExpiresAt?: DateTimeNullableWithAggregatesFilter<"Account"> | Date | string | null
    scope?: StringNullableWithAggregatesFilter<"Account"> | string | null
    password?: StringNullableWithAggregatesFilter<"Account"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Account"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Account"> | Date | string
  }

  export type VerificationWhereInput = {
    AND?: VerificationWhereInput | VerificationWhereInput[]
    OR?: VerificationWhereInput[]
    NOT?: VerificationWhereInput | VerificationWhereInput[]
    id?: StringFilter<"Verification"> | string
    identifier?: StringFilter<"Verification"> | string
    value?: StringFilter<"Verification"> | string
    expiresAt?: DateTimeFilter<"Verification"> | Date | string
    createdAt?: DateTimeFilter<"Verification"> | Date | string
    updatedAt?: DateTimeFilter<"Verification"> | Date | string
  }

  export type VerificationOrderByWithRelationInput = {
    id?: SortOrder
    identifier?: SortOrder
    value?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VerificationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: VerificationWhereInput | VerificationWhereInput[]
    OR?: VerificationWhereInput[]
    NOT?: VerificationWhereInput | VerificationWhereInput[]
    identifier?: StringFilter<"Verification"> | string
    value?: StringFilter<"Verification"> | string
    expiresAt?: DateTimeFilter<"Verification"> | Date | string
    createdAt?: DateTimeFilter<"Verification"> | Date | string
    updatedAt?: DateTimeFilter<"Verification"> | Date | string
  }, "id">

  export type VerificationOrderByWithAggregationInput = {
    id?: SortOrder
    identifier?: SortOrder
    value?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: VerificationCountOrderByAggregateInput
    _max?: VerificationMaxOrderByAggregateInput
    _min?: VerificationMinOrderByAggregateInput
  }

  export type VerificationScalarWhereWithAggregatesInput = {
    AND?: VerificationScalarWhereWithAggregatesInput | VerificationScalarWhereWithAggregatesInput[]
    OR?: VerificationScalarWhereWithAggregatesInput[]
    NOT?: VerificationScalarWhereWithAggregatesInput | VerificationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Verification"> | string
    identifier?: StringWithAggregatesFilter<"Verification"> | string
    value?: StringWithAggregatesFilter<"Verification"> | string
    expiresAt?: DateTimeWithAggregatesFilter<"Verification"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"Verification"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Verification"> | Date | string
  }

  export type SignalementsWhereInput = {
    AND?: SignalementsWhereInput | SignalementsWhereInput[]
    OR?: SignalementsWhereInput[]
    NOT?: SignalementsWhereInput | SignalementsWhereInput[]
    id?: StringFilter<"Signalements"> | string
    sujet?: StringNullableFilter<"Signalements"> | string | null
    message?: StringFilter<"Signalements"> | string
    cree_le?: DateTimeFilter<"Signalements"> | Date | string
    modifie_le?: DateTimeFilter<"Signalements"> | Date | string
    userId?: StringFilter<"Signalements"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type SignalementsOrderByWithRelationInput = {
    id?: SortOrder
    sujet?: SortOrderInput | SortOrder
    message?: SortOrder
    cree_le?: SortOrder
    modifie_le?: SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type SignalementsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SignalementsWhereInput | SignalementsWhereInput[]
    OR?: SignalementsWhereInput[]
    NOT?: SignalementsWhereInput | SignalementsWhereInput[]
    sujet?: StringNullableFilter<"Signalements"> | string | null
    message?: StringFilter<"Signalements"> | string
    cree_le?: DateTimeFilter<"Signalements"> | Date | string
    modifie_le?: DateTimeFilter<"Signalements"> | Date | string
    userId?: StringFilter<"Signalements"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type SignalementsOrderByWithAggregationInput = {
    id?: SortOrder
    sujet?: SortOrderInput | SortOrder
    message?: SortOrder
    cree_le?: SortOrder
    modifie_le?: SortOrder
    userId?: SortOrder
    _count?: SignalementsCountOrderByAggregateInput
    _max?: SignalementsMaxOrderByAggregateInput
    _min?: SignalementsMinOrderByAggregateInput
  }

  export type SignalementsScalarWhereWithAggregatesInput = {
    AND?: SignalementsScalarWhereWithAggregatesInput | SignalementsScalarWhereWithAggregatesInput[]
    OR?: SignalementsScalarWhereWithAggregatesInput[]
    NOT?: SignalementsScalarWhereWithAggregatesInput | SignalementsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Signalements"> | string
    sujet?: StringNullableWithAggregatesFilter<"Signalements"> | string | null
    message?: StringWithAggregatesFilter<"Signalements"> | string
    cree_le?: DateTimeWithAggregatesFilter<"Signalements"> | Date | string
    modifie_le?: DateTimeWithAggregatesFilter<"Signalements"> | Date | string
    userId?: StringWithAggregatesFilter<"Signalements"> | string
  }

  export type PatientsWhereInput = {
    AND?: PatientsWhereInput | PatientsWhereInput[]
    OR?: PatientsWhereInput[]
    NOT?: PatientsWhereInput | PatientsWhereInput[]
    id_patient?: StringFilter<"Patients"> | string
    cree_le?: DateTimeFilter<"Patients"> | Date | string
    modifie_le?: DateTimeFilter<"Patients"> | Date | string
    userId?: StringFilter<"Patients"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    rendezVous?: RendezVousListRelationFilter
    consultations?: ConsultationsListRelationFilter
  }

  export type PatientsOrderByWithRelationInput = {
    id_patient?: SortOrder
    cree_le?: SortOrder
    modifie_le?: SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
    rendezVous?: RendezVousOrderByRelationAggregateInput
    consultations?: ConsultationsOrderByRelationAggregateInput
  }

  export type PatientsWhereUniqueInput = Prisma.AtLeast<{
    id_patient?: string
    userId?: string
    AND?: PatientsWhereInput | PatientsWhereInput[]
    OR?: PatientsWhereInput[]
    NOT?: PatientsWhereInput | PatientsWhereInput[]
    cree_le?: DateTimeFilter<"Patients"> | Date | string
    modifie_le?: DateTimeFilter<"Patients"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    rendezVous?: RendezVousListRelationFilter
    consultations?: ConsultationsListRelationFilter
  }, "id_patient" | "userId">

  export type PatientsOrderByWithAggregationInput = {
    id_patient?: SortOrder
    cree_le?: SortOrder
    modifie_le?: SortOrder
    userId?: SortOrder
    _count?: PatientsCountOrderByAggregateInput
    _max?: PatientsMaxOrderByAggregateInput
    _min?: PatientsMinOrderByAggregateInput
  }

  export type PatientsScalarWhereWithAggregatesInput = {
    AND?: PatientsScalarWhereWithAggregatesInput | PatientsScalarWhereWithAggregatesInput[]
    OR?: PatientsScalarWhereWithAggregatesInput[]
    NOT?: PatientsScalarWhereWithAggregatesInput | PatientsScalarWhereWithAggregatesInput[]
    id_patient?: StringWithAggregatesFilter<"Patients"> | string
    cree_le?: DateTimeWithAggregatesFilter<"Patients"> | Date | string
    modifie_le?: DateTimeWithAggregatesFilter<"Patients"> | Date | string
    userId?: StringWithAggregatesFilter<"Patients"> | string
  }

  export type MedecinsWhereInput = {
    AND?: MedecinsWhereInput | MedecinsWhereInput[]
    OR?: MedecinsWhereInput[]
    NOT?: MedecinsWhereInput | MedecinsWhereInput[]
    id_medecin?: StringFilter<"Medecins"> | string
    specialite?: StringFilter<"Medecins"> | string
    description?: StringFilter<"Medecins"> | string
    nombre_signalement?: IntFilter<"Medecins"> | number
    cree_le?: DateTimeFilter<"Medecins"> | Date | string
    modifie_le?: DateTimeFilter<"Medecins"> | Date | string
    userId?: StringFilter<"Medecins"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    rendezVous?: RendezVousListRelationFilter
    posts?: PostsListRelationFilter
    consultations?: ConsultationsListRelationFilter
  }

  export type MedecinsOrderByWithRelationInput = {
    id_medecin?: SortOrder
    specialite?: SortOrder
    description?: SortOrder
    nombre_signalement?: SortOrder
    cree_le?: SortOrder
    modifie_le?: SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
    rendezVous?: RendezVousOrderByRelationAggregateInput
    posts?: PostsOrderByRelationAggregateInput
    consultations?: ConsultationsOrderByRelationAggregateInput
  }

  export type MedecinsWhereUniqueInput = Prisma.AtLeast<{
    id_medecin?: string
    userId?: string
    AND?: MedecinsWhereInput | MedecinsWhereInput[]
    OR?: MedecinsWhereInput[]
    NOT?: MedecinsWhereInput | MedecinsWhereInput[]
    specialite?: StringFilter<"Medecins"> | string
    description?: StringFilter<"Medecins"> | string
    nombre_signalement?: IntFilter<"Medecins"> | number
    cree_le?: DateTimeFilter<"Medecins"> | Date | string
    modifie_le?: DateTimeFilter<"Medecins"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    rendezVous?: RendezVousListRelationFilter
    posts?: PostsListRelationFilter
    consultations?: ConsultationsListRelationFilter
  }, "id_medecin" | "userId">

  export type MedecinsOrderByWithAggregationInput = {
    id_medecin?: SortOrder
    specialite?: SortOrder
    description?: SortOrder
    nombre_signalement?: SortOrder
    cree_le?: SortOrder
    modifie_le?: SortOrder
    userId?: SortOrder
    _count?: MedecinsCountOrderByAggregateInput
    _avg?: MedecinsAvgOrderByAggregateInput
    _max?: MedecinsMaxOrderByAggregateInput
    _min?: MedecinsMinOrderByAggregateInput
    _sum?: MedecinsSumOrderByAggregateInput
  }

  export type MedecinsScalarWhereWithAggregatesInput = {
    AND?: MedecinsScalarWhereWithAggregatesInput | MedecinsScalarWhereWithAggregatesInput[]
    OR?: MedecinsScalarWhereWithAggregatesInput[]
    NOT?: MedecinsScalarWhereWithAggregatesInput | MedecinsScalarWhereWithAggregatesInput[]
    id_medecin?: StringWithAggregatesFilter<"Medecins"> | string
    specialite?: StringWithAggregatesFilter<"Medecins"> | string
    description?: StringWithAggregatesFilter<"Medecins"> | string
    nombre_signalement?: IntWithAggregatesFilter<"Medecins"> | number
    cree_le?: DateTimeWithAggregatesFilter<"Medecins"> | Date | string
    modifie_le?: DateTimeWithAggregatesFilter<"Medecins"> | Date | string
    userId?: StringWithAggregatesFilter<"Medecins"> | string
  }

  export type RendezVousWhereInput = {
    AND?: RendezVousWhereInput | RendezVousWhereInput[]
    OR?: RendezVousWhereInput[]
    NOT?: RendezVousWhereInput | RendezVousWhereInput[]
    id_rdv?: StringFilter<"RendezVous"> | string
    motif?: StringFilter<"RendezVous"> | string
    cree_le?: DateTimeFilter<"RendezVous"> | Date | string
    status?: EnumStatusRvdFilter<"RendezVous"> | $Enums.StatusRvd
    modifie_le?: DateTimeFilter<"RendezVous"> | Date | string
    id_patient?: StringFilter<"RendezVous"> | string
    id_medecin?: StringFilter<"RendezVous"> | string
    patients?: XOR<PatientsScalarRelationFilter, PatientsWhereInput>
    medecins?: XOR<MedecinsScalarRelationFilter, MedecinsWhereInput>
  }

  export type RendezVousOrderByWithRelationInput = {
    id_rdv?: SortOrder
    motif?: SortOrder
    cree_le?: SortOrder
    status?: SortOrder
    modifie_le?: SortOrder
    id_patient?: SortOrder
    id_medecin?: SortOrder
    patients?: PatientsOrderByWithRelationInput
    medecins?: MedecinsOrderByWithRelationInput
  }

  export type RendezVousWhereUniqueInput = Prisma.AtLeast<{
    id_rdv?: string
    AND?: RendezVousWhereInput | RendezVousWhereInput[]
    OR?: RendezVousWhereInput[]
    NOT?: RendezVousWhereInput | RendezVousWhereInput[]
    motif?: StringFilter<"RendezVous"> | string
    cree_le?: DateTimeFilter<"RendezVous"> | Date | string
    status?: EnumStatusRvdFilter<"RendezVous"> | $Enums.StatusRvd
    modifie_le?: DateTimeFilter<"RendezVous"> | Date | string
    id_patient?: StringFilter<"RendezVous"> | string
    id_medecin?: StringFilter<"RendezVous"> | string
    patients?: XOR<PatientsScalarRelationFilter, PatientsWhereInput>
    medecins?: XOR<MedecinsScalarRelationFilter, MedecinsWhereInput>
  }, "id_rdv">

  export type RendezVousOrderByWithAggregationInput = {
    id_rdv?: SortOrder
    motif?: SortOrder
    cree_le?: SortOrder
    status?: SortOrder
    modifie_le?: SortOrder
    id_patient?: SortOrder
    id_medecin?: SortOrder
    _count?: RendezVousCountOrderByAggregateInput
    _max?: RendezVousMaxOrderByAggregateInput
    _min?: RendezVousMinOrderByAggregateInput
  }

  export type RendezVousScalarWhereWithAggregatesInput = {
    AND?: RendezVousScalarWhereWithAggregatesInput | RendezVousScalarWhereWithAggregatesInput[]
    OR?: RendezVousScalarWhereWithAggregatesInput[]
    NOT?: RendezVousScalarWhereWithAggregatesInput | RendezVousScalarWhereWithAggregatesInput[]
    id_rdv?: StringWithAggregatesFilter<"RendezVous"> | string
    motif?: StringWithAggregatesFilter<"RendezVous"> | string
    cree_le?: DateTimeWithAggregatesFilter<"RendezVous"> | Date | string
    status?: EnumStatusRvdWithAggregatesFilter<"RendezVous"> | $Enums.StatusRvd
    modifie_le?: DateTimeWithAggregatesFilter<"RendezVous"> | Date | string
    id_patient?: StringWithAggregatesFilter<"RendezVous"> | string
    id_medecin?: StringWithAggregatesFilter<"RendezVous"> | string
  }

  export type PostsWhereInput = {
    AND?: PostsWhereInput | PostsWhereInput[]
    OR?: PostsWhereInput[]
    NOT?: PostsWhereInput | PostsWhereInput[]
    id_post?: StringFilter<"Posts"> | string
    slug?: StringFilter<"Posts"> | string
    titre?: StringFilter<"Posts"> | string
    description?: StringFilter<"Posts"> | string
    lien_image?: StringNullableFilter<"Posts"> | string | null
    star?: IntFilter<"Posts"> | number
    nombre_aime?: IntFilter<"Posts"> | number
    nombre_non_aime?: IntFilter<"Posts"> | number
    nombre_vue?: IntFilter<"Posts"> | number
    cree_le?: DateTimeFilter<"Posts"> | Date | string
    modifie_le?: DateTimeFilter<"Posts"> | Date | string
    id_medecin?: StringFilter<"Posts"> | string
    medecins?: XOR<MedecinsScalarRelationFilter, MedecinsWhereInput>
    commentaires?: CommentairesListRelationFilter
  }

  export type PostsOrderByWithRelationInput = {
    id_post?: SortOrder
    slug?: SortOrder
    titre?: SortOrder
    description?: SortOrder
    lien_image?: SortOrderInput | SortOrder
    star?: SortOrder
    nombre_aime?: SortOrder
    nombre_non_aime?: SortOrder
    nombre_vue?: SortOrder
    cree_le?: SortOrder
    modifie_le?: SortOrder
    id_medecin?: SortOrder
    medecins?: MedecinsOrderByWithRelationInput
    commentaires?: CommentairesOrderByRelationAggregateInput
  }

  export type PostsWhereUniqueInput = Prisma.AtLeast<{
    id_post?: string
    slug?: string
    AND?: PostsWhereInput | PostsWhereInput[]
    OR?: PostsWhereInput[]
    NOT?: PostsWhereInput | PostsWhereInput[]
    titre?: StringFilter<"Posts"> | string
    description?: StringFilter<"Posts"> | string
    lien_image?: StringNullableFilter<"Posts"> | string | null
    star?: IntFilter<"Posts"> | number
    nombre_aime?: IntFilter<"Posts"> | number
    nombre_non_aime?: IntFilter<"Posts"> | number
    nombre_vue?: IntFilter<"Posts"> | number
    cree_le?: DateTimeFilter<"Posts"> | Date | string
    modifie_le?: DateTimeFilter<"Posts"> | Date | string
    id_medecin?: StringFilter<"Posts"> | string
    medecins?: XOR<MedecinsScalarRelationFilter, MedecinsWhereInput>
    commentaires?: CommentairesListRelationFilter
  }, "id_post" | "slug">

  export type PostsOrderByWithAggregationInput = {
    id_post?: SortOrder
    slug?: SortOrder
    titre?: SortOrder
    description?: SortOrder
    lien_image?: SortOrderInput | SortOrder
    star?: SortOrder
    nombre_aime?: SortOrder
    nombre_non_aime?: SortOrder
    nombre_vue?: SortOrder
    cree_le?: SortOrder
    modifie_le?: SortOrder
    id_medecin?: SortOrder
    _count?: PostsCountOrderByAggregateInput
    _avg?: PostsAvgOrderByAggregateInput
    _max?: PostsMaxOrderByAggregateInput
    _min?: PostsMinOrderByAggregateInput
    _sum?: PostsSumOrderByAggregateInput
  }

  export type PostsScalarWhereWithAggregatesInput = {
    AND?: PostsScalarWhereWithAggregatesInput | PostsScalarWhereWithAggregatesInput[]
    OR?: PostsScalarWhereWithAggregatesInput[]
    NOT?: PostsScalarWhereWithAggregatesInput | PostsScalarWhereWithAggregatesInput[]
    id_post?: StringWithAggregatesFilter<"Posts"> | string
    slug?: StringWithAggregatesFilter<"Posts"> | string
    titre?: StringWithAggregatesFilter<"Posts"> | string
    description?: StringWithAggregatesFilter<"Posts"> | string
    lien_image?: StringNullableWithAggregatesFilter<"Posts"> | string | null
    star?: IntWithAggregatesFilter<"Posts"> | number
    nombre_aime?: IntWithAggregatesFilter<"Posts"> | number
    nombre_non_aime?: IntWithAggregatesFilter<"Posts"> | number
    nombre_vue?: IntWithAggregatesFilter<"Posts"> | number
    cree_le?: DateTimeWithAggregatesFilter<"Posts"> | Date | string
    modifie_le?: DateTimeWithAggregatesFilter<"Posts"> | Date | string
    id_medecin?: StringWithAggregatesFilter<"Posts"> | string
  }

  export type CommentairesWhereInput = {
    AND?: CommentairesWhereInput | CommentairesWhereInput[]
    OR?: CommentairesWhereInput[]
    NOT?: CommentairesWhereInput | CommentairesWhereInput[]
    id_commentaire?: StringFilter<"Commentaires"> | string
    commentaire?: StringFilter<"Commentaires"> | string
    cree_le?: DateTimeFilter<"Commentaires"> | Date | string
    modifie_le?: DateTimeFilter<"Commentaires"> | Date | string
    id_post?: StringFilter<"Commentaires"> | string
    posts?: XOR<PostsScalarRelationFilter, PostsWhereInput>
  }

  export type CommentairesOrderByWithRelationInput = {
    id_commentaire?: SortOrder
    commentaire?: SortOrder
    cree_le?: SortOrder
    modifie_le?: SortOrder
    id_post?: SortOrder
    posts?: PostsOrderByWithRelationInput
  }

  export type CommentairesWhereUniqueInput = Prisma.AtLeast<{
    id_commentaire?: string
    AND?: CommentairesWhereInput | CommentairesWhereInput[]
    OR?: CommentairesWhereInput[]
    NOT?: CommentairesWhereInput | CommentairesWhereInput[]
    commentaire?: StringFilter<"Commentaires"> | string
    cree_le?: DateTimeFilter<"Commentaires"> | Date | string
    modifie_le?: DateTimeFilter<"Commentaires"> | Date | string
    id_post?: StringFilter<"Commentaires"> | string
    posts?: XOR<PostsScalarRelationFilter, PostsWhereInput>
  }, "id_commentaire">

  export type CommentairesOrderByWithAggregationInput = {
    id_commentaire?: SortOrder
    commentaire?: SortOrder
    cree_le?: SortOrder
    modifie_le?: SortOrder
    id_post?: SortOrder
    _count?: CommentairesCountOrderByAggregateInput
    _max?: CommentairesMaxOrderByAggregateInput
    _min?: CommentairesMinOrderByAggregateInput
  }

  export type CommentairesScalarWhereWithAggregatesInput = {
    AND?: CommentairesScalarWhereWithAggregatesInput | CommentairesScalarWhereWithAggregatesInput[]
    OR?: CommentairesScalarWhereWithAggregatesInput[]
    NOT?: CommentairesScalarWhereWithAggregatesInput | CommentairesScalarWhereWithAggregatesInput[]
    id_commentaire?: StringWithAggregatesFilter<"Commentaires"> | string
    commentaire?: StringWithAggregatesFilter<"Commentaires"> | string
    cree_le?: DateTimeWithAggregatesFilter<"Commentaires"> | Date | string
    modifie_le?: DateTimeWithAggregatesFilter<"Commentaires"> | Date | string
    id_post?: StringWithAggregatesFilter<"Commentaires"> | string
  }

  export type ConsultationsWhereInput = {
    AND?: ConsultationsWhereInput | ConsultationsWhereInput[]
    OR?: ConsultationsWhereInput[]
    NOT?: ConsultationsWhereInput | ConsultationsWhereInput[]
    id_consultation?: StringFilter<"Consultations"> | string
    diagnostique?: StringFilter<"Consultations"> | string
    cree_le?: DateTimeFilter<"Consultations"> | Date | string
    modifie_le?: DateTimeFilter<"Consultations"> | Date | string
    id_patient?: StringFilter<"Consultations"> | string
    id_medecin?: StringFilter<"Consultations"> | string
    patient?: XOR<PatientsScalarRelationFilter, PatientsWhereInput>
    medecin?: XOR<MedecinsScalarRelationFilter, MedecinsWhereInput>
    fichiers?: FichiersListRelationFilter
  }

  export type ConsultationsOrderByWithRelationInput = {
    id_consultation?: SortOrder
    diagnostique?: SortOrder
    cree_le?: SortOrder
    modifie_le?: SortOrder
    id_patient?: SortOrder
    id_medecin?: SortOrder
    patient?: PatientsOrderByWithRelationInput
    medecin?: MedecinsOrderByWithRelationInput
    fichiers?: FichiersOrderByRelationAggregateInput
  }

  export type ConsultationsWhereUniqueInput = Prisma.AtLeast<{
    id_consultation?: string
    AND?: ConsultationsWhereInput | ConsultationsWhereInput[]
    OR?: ConsultationsWhereInput[]
    NOT?: ConsultationsWhereInput | ConsultationsWhereInput[]
    diagnostique?: StringFilter<"Consultations"> | string
    cree_le?: DateTimeFilter<"Consultations"> | Date | string
    modifie_le?: DateTimeFilter<"Consultations"> | Date | string
    id_patient?: StringFilter<"Consultations"> | string
    id_medecin?: StringFilter<"Consultations"> | string
    patient?: XOR<PatientsScalarRelationFilter, PatientsWhereInput>
    medecin?: XOR<MedecinsScalarRelationFilter, MedecinsWhereInput>
    fichiers?: FichiersListRelationFilter
  }, "id_consultation">

  export type ConsultationsOrderByWithAggregationInput = {
    id_consultation?: SortOrder
    diagnostique?: SortOrder
    cree_le?: SortOrder
    modifie_le?: SortOrder
    id_patient?: SortOrder
    id_medecin?: SortOrder
    _count?: ConsultationsCountOrderByAggregateInput
    _max?: ConsultationsMaxOrderByAggregateInput
    _min?: ConsultationsMinOrderByAggregateInput
  }

  export type ConsultationsScalarWhereWithAggregatesInput = {
    AND?: ConsultationsScalarWhereWithAggregatesInput | ConsultationsScalarWhereWithAggregatesInput[]
    OR?: ConsultationsScalarWhereWithAggregatesInput[]
    NOT?: ConsultationsScalarWhereWithAggregatesInput | ConsultationsScalarWhereWithAggregatesInput[]
    id_consultation?: StringWithAggregatesFilter<"Consultations"> | string
    diagnostique?: StringWithAggregatesFilter<"Consultations"> | string
    cree_le?: DateTimeWithAggregatesFilter<"Consultations"> | Date | string
    modifie_le?: DateTimeWithAggregatesFilter<"Consultations"> | Date | string
    id_patient?: StringWithAggregatesFilter<"Consultations"> | string
    id_medecin?: StringWithAggregatesFilter<"Consultations"> | string
  }

  export type FichiersWhereInput = {
    AND?: FichiersWhereInput | FichiersWhereInput[]
    OR?: FichiersWhereInput[]
    NOT?: FichiersWhereInput | FichiersWhereInput[]
    id_fichier?: StringFilter<"Fichiers"> | string
    lien_fichier?: StringFilter<"Fichiers"> | string
    cree_le?: DateTimeFilter<"Fichiers"> | Date | string
    modifie_le?: DateTimeFilter<"Fichiers"> | Date | string
    id_consultation?: StringFilter<"Fichiers"> | string
    consultations?: XOR<ConsultationsScalarRelationFilter, ConsultationsWhereInput>
  }

  export type FichiersOrderByWithRelationInput = {
    id_fichier?: SortOrder
    lien_fichier?: SortOrder
    cree_le?: SortOrder
    modifie_le?: SortOrder
    id_consultation?: SortOrder
    consultations?: ConsultationsOrderByWithRelationInput
  }

  export type FichiersWhereUniqueInput = Prisma.AtLeast<{
    id_fichier?: string
    AND?: FichiersWhereInput | FichiersWhereInput[]
    OR?: FichiersWhereInput[]
    NOT?: FichiersWhereInput | FichiersWhereInput[]
    lien_fichier?: StringFilter<"Fichiers"> | string
    cree_le?: DateTimeFilter<"Fichiers"> | Date | string
    modifie_le?: DateTimeFilter<"Fichiers"> | Date | string
    id_consultation?: StringFilter<"Fichiers"> | string
    consultations?: XOR<ConsultationsScalarRelationFilter, ConsultationsWhereInput>
  }, "id_fichier">

  export type FichiersOrderByWithAggregationInput = {
    id_fichier?: SortOrder
    lien_fichier?: SortOrder
    cree_le?: SortOrder
    modifie_le?: SortOrder
    id_consultation?: SortOrder
    _count?: FichiersCountOrderByAggregateInput
    _max?: FichiersMaxOrderByAggregateInput
    _min?: FichiersMinOrderByAggregateInput
  }

  export type FichiersScalarWhereWithAggregatesInput = {
    AND?: FichiersScalarWhereWithAggregatesInput | FichiersScalarWhereWithAggregatesInput[]
    OR?: FichiersScalarWhereWithAggregatesInput[]
    NOT?: FichiersScalarWhereWithAggregatesInput | FichiersScalarWhereWithAggregatesInput[]
    id_fichier?: StringWithAggregatesFilter<"Fichiers"> | string
    lien_fichier?: StringWithAggregatesFilter<"Fichiers"> | string
    cree_le?: DateTimeWithAggregatesFilter<"Fichiers"> | Date | string
    modifie_le?: DateTimeWithAggregatesFilter<"Fichiers"> | Date | string
    id_consultation?: StringWithAggregatesFilter<"Fichiers"> | string
  }

  export type UserCreateInput = {
    id: string
    createdAt?: Date | string
    email: string
    name?: string | null
    postnom?: string | null
    prenom?: string | null
    slug?: string | null
    numero_telephone?: string | null
    date_de_naissance?: Date | string | null
    adresse_residence?: string | null
    emailVerified?: boolean
    image?: string | null
    sexe?: $Enums.SEXE | null
    updatedAt?: Date | string
    is_active?: boolean
    role?: string | null
    banned?: boolean | null
    banReason?: string | null
    banExpires?: Date | string | null
    sessions?: SessionCreateNestedManyWithoutUserInput
    accounts?: AccountCreateNestedManyWithoutUserInput
    signalements?: SignalementsCreateNestedManyWithoutUserInput
    patient?: PatientsCreateNestedManyWithoutUserInput
    medecin?: MedecinsCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id: string
    createdAt?: Date | string
    email: string
    name?: string | null
    postnom?: string | null
    prenom?: string | null
    slug?: string | null
    numero_telephone?: string | null
    date_de_naissance?: Date | string | null
    adresse_residence?: string | null
    emailVerified?: boolean
    image?: string | null
    sexe?: $Enums.SEXE | null
    updatedAt?: Date | string
    is_active?: boolean
    role?: string | null
    banned?: boolean | null
    banReason?: string | null
    banExpires?: Date | string | null
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    signalements?: SignalementsUncheckedCreateNestedManyWithoutUserInput
    patient?: PatientsUncheckedCreateNestedManyWithoutUserInput
    medecin?: MedecinsUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    postnom?: NullableStringFieldUpdateOperationsInput | string | null
    prenom?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    numero_telephone?: NullableStringFieldUpdateOperationsInput | string | null
    date_de_naissance?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    adresse_residence?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    sexe?: NullableEnumSEXEFieldUpdateOperationsInput | $Enums.SEXE | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    role?: NullableStringFieldUpdateOperationsInput | string | null
    banned?: NullableBoolFieldUpdateOperationsInput | boolean | null
    banReason?: NullableStringFieldUpdateOperationsInput | string | null
    banExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sessions?: SessionUpdateManyWithoutUserNestedInput
    accounts?: AccountUpdateManyWithoutUserNestedInput
    signalements?: SignalementsUpdateManyWithoutUserNestedInput
    patient?: PatientsUpdateManyWithoutUserNestedInput
    medecin?: MedecinsUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    postnom?: NullableStringFieldUpdateOperationsInput | string | null
    prenom?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    numero_telephone?: NullableStringFieldUpdateOperationsInput | string | null
    date_de_naissance?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    adresse_residence?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    sexe?: NullableEnumSEXEFieldUpdateOperationsInput | $Enums.SEXE | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    role?: NullableStringFieldUpdateOperationsInput | string | null
    banned?: NullableBoolFieldUpdateOperationsInput | boolean | null
    banReason?: NullableStringFieldUpdateOperationsInput | string | null
    banExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    signalements?: SignalementsUncheckedUpdateManyWithoutUserNestedInput
    patient?: PatientsUncheckedUpdateManyWithoutUserNestedInput
    medecin?: MedecinsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id: string
    createdAt?: Date | string
    email: string
    name?: string | null
    postnom?: string | null
    prenom?: string | null
    slug?: string | null
    numero_telephone?: string | null
    date_de_naissance?: Date | string | null
    adresse_residence?: string | null
    emailVerified?: boolean
    image?: string | null
    sexe?: $Enums.SEXE | null
    updatedAt?: Date | string
    is_active?: boolean
    role?: string | null
    banned?: boolean | null
    banReason?: string | null
    banExpires?: Date | string | null
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    postnom?: NullableStringFieldUpdateOperationsInput | string | null
    prenom?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    numero_telephone?: NullableStringFieldUpdateOperationsInput | string | null
    date_de_naissance?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    adresse_residence?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    sexe?: NullableEnumSEXEFieldUpdateOperationsInput | $Enums.SEXE | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    role?: NullableStringFieldUpdateOperationsInput | string | null
    banned?: NullableBoolFieldUpdateOperationsInput | boolean | null
    banReason?: NullableStringFieldUpdateOperationsInput | string | null
    banExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    postnom?: NullableStringFieldUpdateOperationsInput | string | null
    prenom?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    numero_telephone?: NullableStringFieldUpdateOperationsInput | string | null
    date_de_naissance?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    adresse_residence?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    sexe?: NullableEnumSEXEFieldUpdateOperationsInput | $Enums.SEXE | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    role?: NullableStringFieldUpdateOperationsInput | string | null
    banned?: NullableBoolFieldUpdateOperationsInput | boolean | null
    banReason?: NullableStringFieldUpdateOperationsInput | string | null
    banExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type SessionCreateInput = {
    id: string
    expiresAt: Date | string
    token: string
    createdAt?: Date | string
    updatedAt?: Date | string
    ipAddress?: string | null
    userAgent?: string | null
    impersonatedBy?: string | null
    user: UserCreateNestedOneWithoutSessionsInput
  }

  export type SessionUncheckedCreateInput = {
    id: string
    expiresAt: Date | string
    token: string
    createdAt?: Date | string
    updatedAt?: Date | string
    ipAddress?: string | null
    userAgent?: string | null
    userId: string
    impersonatedBy?: string | null
  }

  export type SessionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    impersonatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutSessionsNestedInput
  }

  export type SessionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    impersonatedBy?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SessionCreateManyInput = {
    id: string
    expiresAt: Date | string
    token: string
    createdAt?: Date | string
    updatedAt?: Date | string
    ipAddress?: string | null
    userAgent?: string | null
    userId: string
    impersonatedBy?: string | null
  }

  export type SessionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    impersonatedBy?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SessionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    impersonatedBy?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccountCreateInput = {
    id: string
    accountId: string
    providerId: string
    accessToken?: string | null
    refreshToken?: string | null
    idToken?: string | null
    accessTokenExpiresAt?: Date | string | null
    refreshTokenExpiresAt?: Date | string | null
    scope?: string | null
    password?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutAccountsInput
  }

  export type AccountUncheckedCreateInput = {
    id: string
    accountId: string
    providerId: string
    userId: string
    accessToken?: string | null
    refreshToken?: string | null
    idToken?: string | null
    accessTokenExpiresAt?: Date | string | null
    refreshTokenExpiresAt?: Date | string | null
    scope?: string | null
    password?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AccountUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    idToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutAccountsNestedInput
  }

  export type AccountUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    idToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountCreateManyInput = {
    id: string
    accountId: string
    providerId: string
    userId: string
    accessToken?: string | null
    refreshToken?: string | null
    idToken?: string | null
    accessTokenExpiresAt?: Date | string | null
    refreshTokenExpiresAt?: Date | string | null
    scope?: string | null
    password?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AccountUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    idToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    idToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationCreateInput = {
    id: string
    identifier: string
    value: string
    expiresAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VerificationUncheckedCreateInput = {
    id: string
    identifier: string
    value: string
    expiresAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VerificationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    identifier?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    identifier?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationCreateManyInput = {
    id: string
    identifier: string
    value: string
    expiresAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VerificationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    identifier?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    identifier?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SignalementsCreateInput = {
    id?: string
    sujet?: string | null
    message: string
    cree_le?: Date | string
    modifie_le?: Date | string
    user: UserCreateNestedOneWithoutSignalementsInput
  }

  export type SignalementsUncheckedCreateInput = {
    id?: string
    sujet?: string | null
    message: string
    cree_le?: Date | string
    modifie_le?: Date | string
    userId: string
  }

  export type SignalementsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sujet?: NullableStringFieldUpdateOperationsInput | string | null
    message?: StringFieldUpdateOperationsInput | string
    cree_le?: DateTimeFieldUpdateOperationsInput | Date | string
    modifie_le?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSignalementsNestedInput
  }

  export type SignalementsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sujet?: NullableStringFieldUpdateOperationsInput | string | null
    message?: StringFieldUpdateOperationsInput | string
    cree_le?: DateTimeFieldUpdateOperationsInput | Date | string
    modifie_le?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type SignalementsCreateManyInput = {
    id?: string
    sujet?: string | null
    message: string
    cree_le?: Date | string
    modifie_le?: Date | string
    userId: string
  }

  export type SignalementsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    sujet?: NullableStringFieldUpdateOperationsInput | string | null
    message?: StringFieldUpdateOperationsInput | string
    cree_le?: DateTimeFieldUpdateOperationsInput | Date | string
    modifie_le?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SignalementsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    sujet?: NullableStringFieldUpdateOperationsInput | string | null
    message?: StringFieldUpdateOperationsInput | string
    cree_le?: DateTimeFieldUpdateOperationsInput | Date | string
    modifie_le?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type PatientsCreateInput = {
    id_patient?: string
    cree_le?: Date | string
    modifie_le?: Date | string
    user: UserCreateNestedOneWithoutPatientInput
    rendezVous?: RendezVousCreateNestedManyWithoutPatientsInput
    consultations?: ConsultationsCreateNestedManyWithoutPatientInput
  }

  export type PatientsUncheckedCreateInput = {
    id_patient?: string
    cree_le?: Date | string
    modifie_le?: Date | string
    userId: string
    rendezVous?: RendezVousUncheckedCreateNestedManyWithoutPatientsInput
    consultations?: ConsultationsUncheckedCreateNestedManyWithoutPatientInput
  }

  export type PatientsUpdateInput = {
    id_patient?: StringFieldUpdateOperationsInput | string
    cree_le?: DateTimeFieldUpdateOperationsInput | Date | string
    modifie_le?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutPatientNestedInput
    rendezVous?: RendezVousUpdateManyWithoutPatientsNestedInput
    consultations?: ConsultationsUpdateManyWithoutPatientNestedInput
  }

  export type PatientsUncheckedUpdateInput = {
    id_patient?: StringFieldUpdateOperationsInput | string
    cree_le?: DateTimeFieldUpdateOperationsInput | Date | string
    modifie_le?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    rendezVous?: RendezVousUncheckedUpdateManyWithoutPatientsNestedInput
    consultations?: ConsultationsUncheckedUpdateManyWithoutPatientNestedInput
  }

  export type PatientsCreateManyInput = {
    id_patient?: string
    cree_le?: Date | string
    modifie_le?: Date | string
    userId: string
  }

  export type PatientsUpdateManyMutationInput = {
    id_patient?: StringFieldUpdateOperationsInput | string
    cree_le?: DateTimeFieldUpdateOperationsInput | Date | string
    modifie_le?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PatientsUncheckedUpdateManyInput = {
    id_patient?: StringFieldUpdateOperationsInput | string
    cree_le?: DateTimeFieldUpdateOperationsInput | Date | string
    modifie_le?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type MedecinsCreateInput = {
    id_medecin?: string
    specialite: string
    description: string
    nombre_signalement?: number
    cree_le?: Date | string
    modifie_le?: Date | string
    user: UserCreateNestedOneWithoutMedecinInput
    rendezVous?: RendezVousCreateNestedManyWithoutMedecinsInput
    posts?: PostsCreateNestedManyWithoutMedecinsInput
    consultations?: ConsultationsCreateNestedManyWithoutMedecinInput
  }

  export type MedecinsUncheckedCreateInput = {
    id_medecin?: string
    specialite: string
    description: string
    nombre_signalement?: number
    cree_le?: Date | string
    modifie_le?: Date | string
    userId: string
    rendezVous?: RendezVousUncheckedCreateNestedManyWithoutMedecinsInput
    posts?: PostsUncheckedCreateNestedManyWithoutMedecinsInput
    consultations?: ConsultationsUncheckedCreateNestedManyWithoutMedecinInput
  }

  export type MedecinsUpdateInput = {
    id_medecin?: StringFieldUpdateOperationsInput | string
    specialite?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    nombre_signalement?: IntFieldUpdateOperationsInput | number
    cree_le?: DateTimeFieldUpdateOperationsInput | Date | string
    modifie_le?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutMedecinNestedInput
    rendezVous?: RendezVousUpdateManyWithoutMedecinsNestedInput
    posts?: PostsUpdateManyWithoutMedecinsNestedInput
    consultations?: ConsultationsUpdateManyWithoutMedecinNestedInput
  }

  export type MedecinsUncheckedUpdateInput = {
    id_medecin?: StringFieldUpdateOperationsInput | string
    specialite?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    nombre_signalement?: IntFieldUpdateOperationsInput | number
    cree_le?: DateTimeFieldUpdateOperationsInput | Date | string
    modifie_le?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    rendezVous?: RendezVousUncheckedUpdateManyWithoutMedecinsNestedInput
    posts?: PostsUncheckedUpdateManyWithoutMedecinsNestedInput
    consultations?: ConsultationsUncheckedUpdateManyWithoutMedecinNestedInput
  }

  export type MedecinsCreateManyInput = {
    id_medecin?: string
    specialite: string
    description: string
    nombre_signalement?: number
    cree_le?: Date | string
    modifie_le?: Date | string
    userId: string
  }

  export type MedecinsUpdateManyMutationInput = {
    id_medecin?: StringFieldUpdateOperationsInput | string
    specialite?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    nombre_signalement?: IntFieldUpdateOperationsInput | number
    cree_le?: DateTimeFieldUpdateOperationsInput | Date | string
    modifie_le?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MedecinsUncheckedUpdateManyInput = {
    id_medecin?: StringFieldUpdateOperationsInput | string
    specialite?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    nombre_signalement?: IntFieldUpdateOperationsInput | number
    cree_le?: DateTimeFieldUpdateOperationsInput | Date | string
    modifie_le?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type RendezVousCreateInput = {
    id_rdv?: string
    motif: string
    cree_le?: Date | string
    status?: $Enums.StatusRvd
    modifie_le?: Date | string
    patients: PatientsCreateNestedOneWithoutRendezVousInput
    medecins: MedecinsCreateNestedOneWithoutRendezVousInput
  }

  export type RendezVousUncheckedCreateInput = {
    id_rdv?: string
    motif: string
    cree_le?: Date | string
    status?: $Enums.StatusRvd
    modifie_le?: Date | string
    id_patient: string
    id_medecin: string
  }

  export type RendezVousUpdateInput = {
    id_rdv?: StringFieldUpdateOperationsInput | string
    motif?: StringFieldUpdateOperationsInput | string
    cree_le?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusRvdFieldUpdateOperationsInput | $Enums.StatusRvd
    modifie_le?: DateTimeFieldUpdateOperationsInput | Date | string
    patients?: PatientsUpdateOneRequiredWithoutRendezVousNestedInput
    medecins?: MedecinsUpdateOneRequiredWithoutRendezVousNestedInput
  }

  export type RendezVousUncheckedUpdateInput = {
    id_rdv?: StringFieldUpdateOperationsInput | string
    motif?: StringFieldUpdateOperationsInput | string
    cree_le?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusRvdFieldUpdateOperationsInput | $Enums.StatusRvd
    modifie_le?: DateTimeFieldUpdateOperationsInput | Date | string
    id_patient?: StringFieldUpdateOperationsInput | string
    id_medecin?: StringFieldUpdateOperationsInput | string
  }

  export type RendezVousCreateManyInput = {
    id_rdv?: string
    motif: string
    cree_le?: Date | string
    status?: $Enums.StatusRvd
    modifie_le?: Date | string
    id_patient: string
    id_medecin: string
  }

  export type RendezVousUpdateManyMutationInput = {
    id_rdv?: StringFieldUpdateOperationsInput | string
    motif?: StringFieldUpdateOperationsInput | string
    cree_le?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusRvdFieldUpdateOperationsInput | $Enums.StatusRvd
    modifie_le?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RendezVousUncheckedUpdateManyInput = {
    id_rdv?: StringFieldUpdateOperationsInput | string
    motif?: StringFieldUpdateOperationsInput | string
    cree_le?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusRvdFieldUpdateOperationsInput | $Enums.StatusRvd
    modifie_le?: DateTimeFieldUpdateOperationsInput | Date | string
    id_patient?: StringFieldUpdateOperationsInput | string
    id_medecin?: StringFieldUpdateOperationsInput | string
  }

  export type PostsCreateInput = {
    id_post?: string
    slug: string
    titre: string
    description: string
    lien_image?: string | null
    star?: number
    nombre_aime?: number
    nombre_non_aime?: number
    nombre_vue?: number
    cree_le?: Date | string
    modifie_le?: Date | string
    medecins: MedecinsCreateNestedOneWithoutPostsInput
    commentaires?: CommentairesCreateNestedManyWithoutPostsInput
  }

  export type PostsUncheckedCreateInput = {
    id_post?: string
    slug: string
    titre: string
    description: string
    lien_image?: string | null
    star?: number
    nombre_aime?: number
    nombre_non_aime?: number
    nombre_vue?: number
    cree_le?: Date | string
    modifie_le?: Date | string
    id_medecin: string
    commentaires?: CommentairesUncheckedCreateNestedManyWithoutPostsInput
  }

  export type PostsUpdateInput = {
    id_post?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    titre?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    lien_image?: NullableStringFieldUpdateOperationsInput | string | null
    star?: IntFieldUpdateOperationsInput | number
    nombre_aime?: IntFieldUpdateOperationsInput | number
    nombre_non_aime?: IntFieldUpdateOperationsInput | number
    nombre_vue?: IntFieldUpdateOperationsInput | number
    cree_le?: DateTimeFieldUpdateOperationsInput | Date | string
    modifie_le?: DateTimeFieldUpdateOperationsInput | Date | string
    medecins?: MedecinsUpdateOneRequiredWithoutPostsNestedInput
    commentaires?: CommentairesUpdateManyWithoutPostsNestedInput
  }

  export type PostsUncheckedUpdateInput = {
    id_post?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    titre?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    lien_image?: NullableStringFieldUpdateOperationsInput | string | null
    star?: IntFieldUpdateOperationsInput | number
    nombre_aime?: IntFieldUpdateOperationsInput | number
    nombre_non_aime?: IntFieldUpdateOperationsInput | number
    nombre_vue?: IntFieldUpdateOperationsInput | number
    cree_le?: DateTimeFieldUpdateOperationsInput | Date | string
    modifie_le?: DateTimeFieldUpdateOperationsInput | Date | string
    id_medecin?: StringFieldUpdateOperationsInput | string
    commentaires?: CommentairesUncheckedUpdateManyWithoutPostsNestedInput
  }

  export type PostsCreateManyInput = {
    id_post?: string
    slug: string
    titre: string
    description: string
    lien_image?: string | null
    star?: number
    nombre_aime?: number
    nombre_non_aime?: number
    nombre_vue?: number
    cree_le?: Date | string
    modifie_le?: Date | string
    id_medecin: string
  }

  export type PostsUpdateManyMutationInput = {
    id_post?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    titre?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    lien_image?: NullableStringFieldUpdateOperationsInput | string | null
    star?: IntFieldUpdateOperationsInput | number
    nombre_aime?: IntFieldUpdateOperationsInput | number
    nombre_non_aime?: IntFieldUpdateOperationsInput | number
    nombre_vue?: IntFieldUpdateOperationsInput | number
    cree_le?: DateTimeFieldUpdateOperationsInput | Date | string
    modifie_le?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostsUncheckedUpdateManyInput = {
    id_post?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    titre?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    lien_image?: NullableStringFieldUpdateOperationsInput | string | null
    star?: IntFieldUpdateOperationsInput | number
    nombre_aime?: IntFieldUpdateOperationsInput | number
    nombre_non_aime?: IntFieldUpdateOperationsInput | number
    nombre_vue?: IntFieldUpdateOperationsInput | number
    cree_le?: DateTimeFieldUpdateOperationsInput | Date | string
    modifie_le?: DateTimeFieldUpdateOperationsInput | Date | string
    id_medecin?: StringFieldUpdateOperationsInput | string
  }

  export type CommentairesCreateInput = {
    id_commentaire?: string
    commentaire: string
    cree_le?: Date | string
    modifie_le?: Date | string
    posts: PostsCreateNestedOneWithoutCommentairesInput
  }

  export type CommentairesUncheckedCreateInput = {
    id_commentaire?: string
    commentaire: string
    cree_le?: Date | string
    modifie_le?: Date | string
    id_post: string
  }

  export type CommentairesUpdateInput = {
    id_commentaire?: StringFieldUpdateOperationsInput | string
    commentaire?: StringFieldUpdateOperationsInput | string
    cree_le?: DateTimeFieldUpdateOperationsInput | Date | string
    modifie_le?: DateTimeFieldUpdateOperationsInput | Date | string
    posts?: PostsUpdateOneRequiredWithoutCommentairesNestedInput
  }

  export type CommentairesUncheckedUpdateInput = {
    id_commentaire?: StringFieldUpdateOperationsInput | string
    commentaire?: StringFieldUpdateOperationsInput | string
    cree_le?: DateTimeFieldUpdateOperationsInput | Date | string
    modifie_le?: DateTimeFieldUpdateOperationsInput | Date | string
    id_post?: StringFieldUpdateOperationsInput | string
  }

  export type CommentairesCreateManyInput = {
    id_commentaire?: string
    commentaire: string
    cree_le?: Date | string
    modifie_le?: Date | string
    id_post: string
  }

  export type CommentairesUpdateManyMutationInput = {
    id_commentaire?: StringFieldUpdateOperationsInput | string
    commentaire?: StringFieldUpdateOperationsInput | string
    cree_le?: DateTimeFieldUpdateOperationsInput | Date | string
    modifie_le?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentairesUncheckedUpdateManyInput = {
    id_commentaire?: StringFieldUpdateOperationsInput | string
    commentaire?: StringFieldUpdateOperationsInput | string
    cree_le?: DateTimeFieldUpdateOperationsInput | Date | string
    modifie_le?: DateTimeFieldUpdateOperationsInput | Date | string
    id_post?: StringFieldUpdateOperationsInput | string
  }

  export type ConsultationsCreateInput = {
    id_consultation?: string
    diagnostique: string
    cree_le?: Date | string
    modifie_le?: Date | string
    patient: PatientsCreateNestedOneWithoutConsultationsInput
    medecin: MedecinsCreateNestedOneWithoutConsultationsInput
    fichiers?: FichiersCreateNestedManyWithoutConsultationsInput
  }

  export type ConsultationsUncheckedCreateInput = {
    id_consultation?: string
    diagnostique: string
    cree_le?: Date | string
    modifie_le?: Date | string
    id_patient: string
    id_medecin: string
    fichiers?: FichiersUncheckedCreateNestedManyWithoutConsultationsInput
  }

  export type ConsultationsUpdateInput = {
    id_consultation?: StringFieldUpdateOperationsInput | string
    diagnostique?: StringFieldUpdateOperationsInput | string
    cree_le?: DateTimeFieldUpdateOperationsInput | Date | string
    modifie_le?: DateTimeFieldUpdateOperationsInput | Date | string
    patient?: PatientsUpdateOneRequiredWithoutConsultationsNestedInput
    medecin?: MedecinsUpdateOneRequiredWithoutConsultationsNestedInput
    fichiers?: FichiersUpdateManyWithoutConsultationsNestedInput
  }

  export type ConsultationsUncheckedUpdateInput = {
    id_consultation?: StringFieldUpdateOperationsInput | string
    diagnostique?: StringFieldUpdateOperationsInput | string
    cree_le?: DateTimeFieldUpdateOperationsInput | Date | string
    modifie_le?: DateTimeFieldUpdateOperationsInput | Date | string
    id_patient?: StringFieldUpdateOperationsInput | string
    id_medecin?: StringFieldUpdateOperationsInput | string
    fichiers?: FichiersUncheckedUpdateManyWithoutConsultationsNestedInput
  }

  export type ConsultationsCreateManyInput = {
    id_consultation?: string
    diagnostique: string
    cree_le?: Date | string
    modifie_le?: Date | string
    id_patient: string
    id_medecin: string
  }

  export type ConsultationsUpdateManyMutationInput = {
    id_consultation?: StringFieldUpdateOperationsInput | string
    diagnostique?: StringFieldUpdateOperationsInput | string
    cree_le?: DateTimeFieldUpdateOperationsInput | Date | string
    modifie_le?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConsultationsUncheckedUpdateManyInput = {
    id_consultation?: StringFieldUpdateOperationsInput | string
    diagnostique?: StringFieldUpdateOperationsInput | string
    cree_le?: DateTimeFieldUpdateOperationsInput | Date | string
    modifie_le?: DateTimeFieldUpdateOperationsInput | Date | string
    id_patient?: StringFieldUpdateOperationsInput | string
    id_medecin?: StringFieldUpdateOperationsInput | string
  }

  export type FichiersCreateInput = {
    id_fichier?: string
    lien_fichier: string
    cree_le?: Date | string
    modifie_le?: Date | string
    consultations: ConsultationsCreateNestedOneWithoutFichiersInput
  }

  export type FichiersUncheckedCreateInput = {
    id_fichier?: string
    lien_fichier: string
    cree_le?: Date | string
    modifie_le?: Date | string
    id_consultation: string
  }

  export type FichiersUpdateInput = {
    id_fichier?: StringFieldUpdateOperationsInput | string
    lien_fichier?: StringFieldUpdateOperationsInput | string
    cree_le?: DateTimeFieldUpdateOperationsInput | Date | string
    modifie_le?: DateTimeFieldUpdateOperationsInput | Date | string
    consultations?: ConsultationsUpdateOneRequiredWithoutFichiersNestedInput
  }

  export type FichiersUncheckedUpdateInput = {
    id_fichier?: StringFieldUpdateOperationsInput | string
    lien_fichier?: StringFieldUpdateOperationsInput | string
    cree_le?: DateTimeFieldUpdateOperationsInput | Date | string
    modifie_le?: DateTimeFieldUpdateOperationsInput | Date | string
    id_consultation?: StringFieldUpdateOperationsInput | string
  }

  export type FichiersCreateManyInput = {
    id_fichier?: string
    lien_fichier: string
    cree_le?: Date | string
    modifie_le?: Date | string
    id_consultation: string
  }

  export type FichiersUpdateManyMutationInput = {
    id_fichier?: StringFieldUpdateOperationsInput | string
    lien_fichier?: StringFieldUpdateOperationsInput | string
    cree_le?: DateTimeFieldUpdateOperationsInput | Date | string
    modifie_le?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FichiersUncheckedUpdateManyInput = {
    id_fichier?: StringFieldUpdateOperationsInput | string
    lien_fichier?: StringFieldUpdateOperationsInput | string
    cree_le?: DateTimeFieldUpdateOperationsInput | Date | string
    modifie_le?: DateTimeFieldUpdateOperationsInput | Date | string
    id_consultation?: StringFieldUpdateOperationsInput | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type EnumSEXENullableFilter<$PrismaModel = never> = {
    equals?: $Enums.SEXE | EnumSEXEFieldRefInput<$PrismaModel> | null
    in?: $Enums.SEXE[] | ListEnumSEXEFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.SEXE[] | ListEnumSEXEFieldRefInput<$PrismaModel> | null
    not?: NestedEnumSEXENullableFilter<$PrismaModel> | $Enums.SEXE | null
  }

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type SessionListRelationFilter = {
    every?: SessionWhereInput
    some?: SessionWhereInput
    none?: SessionWhereInput
  }

  export type AccountListRelationFilter = {
    every?: AccountWhereInput
    some?: AccountWhereInput
    none?: AccountWhereInput
  }

  export type SignalementsListRelationFilter = {
    every?: SignalementsWhereInput
    some?: SignalementsWhereInput
    none?: SignalementsWhereInput
  }

  export type PatientsListRelationFilter = {
    every?: PatientsWhereInput
    some?: PatientsWhereInput
    none?: PatientsWhereInput
  }

  export type MedecinsListRelationFilter = {
    every?: MedecinsWhereInput
    some?: MedecinsWhereInput
    none?: MedecinsWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type SessionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AccountOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SignalementsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PatientsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MedecinsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    email?: SortOrder
    name?: SortOrder
    postnom?: SortOrder
    prenom?: SortOrder
    slug?: SortOrder
    numero_telephone?: SortOrder
    date_de_naissance?: SortOrder
    adresse_residence?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
    sexe?: SortOrder
    updatedAt?: SortOrder
    is_active?: SortOrder
    role?: SortOrder
    banned?: SortOrder
    banReason?: SortOrder
    banExpires?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    email?: SortOrder
    name?: SortOrder
    postnom?: SortOrder
    prenom?: SortOrder
    slug?: SortOrder
    numero_telephone?: SortOrder
    date_de_naissance?: SortOrder
    adresse_residence?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
    sexe?: SortOrder
    updatedAt?: SortOrder
    is_active?: SortOrder
    role?: SortOrder
    banned?: SortOrder
    banReason?: SortOrder
    banExpires?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    email?: SortOrder
    name?: SortOrder
    postnom?: SortOrder
    prenom?: SortOrder
    slug?: SortOrder
    numero_telephone?: SortOrder
    date_de_naissance?: SortOrder
    adresse_residence?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
    sexe?: SortOrder
    updatedAt?: SortOrder
    is_active?: SortOrder
    role?: SortOrder
    banned?: SortOrder
    banReason?: SortOrder
    banExpires?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type EnumSEXENullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SEXE | EnumSEXEFieldRefInput<$PrismaModel> | null
    in?: $Enums.SEXE[] | ListEnumSEXEFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.SEXE[] | ListEnumSEXEFieldRefInput<$PrismaModel> | null
    not?: NestedEnumSEXENullableWithAggregatesFilter<$PrismaModel> | $Enums.SEXE | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumSEXENullableFilter<$PrismaModel>
    _max?: NestedEnumSEXENullableFilter<$PrismaModel>
  }

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type SessionCountOrderByAggregateInput = {
    id?: SortOrder
    expiresAt?: SortOrder
    token?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrder
    userId?: SortOrder
    impersonatedBy?: SortOrder
  }

  export type SessionMaxOrderByAggregateInput = {
    id?: SortOrder
    expiresAt?: SortOrder
    token?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrder
    userId?: SortOrder
    impersonatedBy?: SortOrder
  }

  export type SessionMinOrderByAggregateInput = {
    id?: SortOrder
    expiresAt?: SortOrder
    token?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrder
    userId?: SortOrder
    impersonatedBy?: SortOrder
  }

  export type AccountCountOrderByAggregateInput = {
    id?: SortOrder
    accountId?: SortOrder
    providerId?: SortOrder
    userId?: SortOrder
    accessToken?: SortOrder
    refreshToken?: SortOrder
    idToken?: SortOrder
    accessTokenExpiresAt?: SortOrder
    refreshTokenExpiresAt?: SortOrder
    scope?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AccountMaxOrderByAggregateInput = {
    id?: SortOrder
    accountId?: SortOrder
    providerId?: SortOrder
    userId?: SortOrder
    accessToken?: SortOrder
    refreshToken?: SortOrder
    idToken?: SortOrder
    accessTokenExpiresAt?: SortOrder
    refreshTokenExpiresAt?: SortOrder
    scope?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AccountMinOrderByAggregateInput = {
    id?: SortOrder
    accountId?: SortOrder
    providerId?: SortOrder
    userId?: SortOrder
    accessToken?: SortOrder
    refreshToken?: SortOrder
    idToken?: SortOrder
    accessTokenExpiresAt?: SortOrder
    refreshTokenExpiresAt?: SortOrder
    scope?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VerificationCountOrderByAggregateInput = {
    id?: SortOrder
    identifier?: SortOrder
    value?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VerificationMaxOrderByAggregateInput = {
    id?: SortOrder
    identifier?: SortOrder
    value?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VerificationMinOrderByAggregateInput = {
    id?: SortOrder
    identifier?: SortOrder
    value?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SignalementsCountOrderByAggregateInput = {
    id?: SortOrder
    sujet?: SortOrder
    message?: SortOrder
    cree_le?: SortOrder
    modifie_le?: SortOrder
    userId?: SortOrder
  }

  export type SignalementsMaxOrderByAggregateInput = {
    id?: SortOrder
    sujet?: SortOrder
    message?: SortOrder
    cree_le?: SortOrder
    modifie_le?: SortOrder
    userId?: SortOrder
  }

  export type SignalementsMinOrderByAggregateInput = {
    id?: SortOrder
    sujet?: SortOrder
    message?: SortOrder
    cree_le?: SortOrder
    modifie_le?: SortOrder
    userId?: SortOrder
  }

  export type RendezVousListRelationFilter = {
    every?: RendezVousWhereInput
    some?: RendezVousWhereInput
    none?: RendezVousWhereInput
  }

  export type ConsultationsListRelationFilter = {
    every?: ConsultationsWhereInput
    some?: ConsultationsWhereInput
    none?: ConsultationsWhereInput
  }

  export type RendezVousOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ConsultationsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PatientsCountOrderByAggregateInput = {
    id_patient?: SortOrder
    cree_le?: SortOrder
    modifie_le?: SortOrder
    userId?: SortOrder
  }

  export type PatientsMaxOrderByAggregateInput = {
    id_patient?: SortOrder
    cree_le?: SortOrder
    modifie_le?: SortOrder
    userId?: SortOrder
  }

  export type PatientsMinOrderByAggregateInput = {
    id_patient?: SortOrder
    cree_le?: SortOrder
    modifie_le?: SortOrder
    userId?: SortOrder
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type PostsListRelationFilter = {
    every?: PostsWhereInput
    some?: PostsWhereInput
    none?: PostsWhereInput
  }

  export type PostsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MedecinsCountOrderByAggregateInput = {
    id_medecin?: SortOrder
    specialite?: SortOrder
    description?: SortOrder
    nombre_signalement?: SortOrder
    cree_le?: SortOrder
    modifie_le?: SortOrder
    userId?: SortOrder
  }

  export type MedecinsAvgOrderByAggregateInput = {
    nombre_signalement?: SortOrder
  }

  export type MedecinsMaxOrderByAggregateInput = {
    id_medecin?: SortOrder
    specialite?: SortOrder
    description?: SortOrder
    nombre_signalement?: SortOrder
    cree_le?: SortOrder
    modifie_le?: SortOrder
    userId?: SortOrder
  }

  export type MedecinsMinOrderByAggregateInput = {
    id_medecin?: SortOrder
    specialite?: SortOrder
    description?: SortOrder
    nombre_signalement?: SortOrder
    cree_le?: SortOrder
    modifie_le?: SortOrder
    userId?: SortOrder
  }

  export type MedecinsSumOrderByAggregateInput = {
    nombre_signalement?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type EnumStatusRvdFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusRvd | EnumStatusRvdFieldRefInput<$PrismaModel>
    in?: $Enums.StatusRvd[] | ListEnumStatusRvdFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusRvd[] | ListEnumStatusRvdFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusRvdFilter<$PrismaModel> | $Enums.StatusRvd
  }

  export type PatientsScalarRelationFilter = {
    is?: PatientsWhereInput
    isNot?: PatientsWhereInput
  }

  export type MedecinsScalarRelationFilter = {
    is?: MedecinsWhereInput
    isNot?: MedecinsWhereInput
  }

  export type RendezVousCountOrderByAggregateInput = {
    id_rdv?: SortOrder
    motif?: SortOrder
    cree_le?: SortOrder
    status?: SortOrder
    modifie_le?: SortOrder
    id_patient?: SortOrder
    id_medecin?: SortOrder
  }

  export type RendezVousMaxOrderByAggregateInput = {
    id_rdv?: SortOrder
    motif?: SortOrder
    cree_le?: SortOrder
    status?: SortOrder
    modifie_le?: SortOrder
    id_patient?: SortOrder
    id_medecin?: SortOrder
  }

  export type RendezVousMinOrderByAggregateInput = {
    id_rdv?: SortOrder
    motif?: SortOrder
    cree_le?: SortOrder
    status?: SortOrder
    modifie_le?: SortOrder
    id_patient?: SortOrder
    id_medecin?: SortOrder
  }

  export type EnumStatusRvdWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusRvd | EnumStatusRvdFieldRefInput<$PrismaModel>
    in?: $Enums.StatusRvd[] | ListEnumStatusRvdFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusRvd[] | ListEnumStatusRvdFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusRvdWithAggregatesFilter<$PrismaModel> | $Enums.StatusRvd
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusRvdFilter<$PrismaModel>
    _max?: NestedEnumStatusRvdFilter<$PrismaModel>
  }

  export type CommentairesListRelationFilter = {
    every?: CommentairesWhereInput
    some?: CommentairesWhereInput
    none?: CommentairesWhereInput
  }

  export type CommentairesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PostsCountOrderByAggregateInput = {
    id_post?: SortOrder
    slug?: SortOrder
    titre?: SortOrder
    description?: SortOrder
    lien_image?: SortOrder
    star?: SortOrder
    nombre_aime?: SortOrder
    nombre_non_aime?: SortOrder
    nombre_vue?: SortOrder
    cree_le?: SortOrder
    modifie_le?: SortOrder
    id_medecin?: SortOrder
  }

  export type PostsAvgOrderByAggregateInput = {
    star?: SortOrder
    nombre_aime?: SortOrder
    nombre_non_aime?: SortOrder
    nombre_vue?: SortOrder
  }

  export type PostsMaxOrderByAggregateInput = {
    id_post?: SortOrder
    slug?: SortOrder
    titre?: SortOrder
    description?: SortOrder
    lien_image?: SortOrder
    star?: SortOrder
    nombre_aime?: SortOrder
    nombre_non_aime?: SortOrder
    nombre_vue?: SortOrder
    cree_le?: SortOrder
    modifie_le?: SortOrder
    id_medecin?: SortOrder
  }

  export type PostsMinOrderByAggregateInput = {
    id_post?: SortOrder
    slug?: SortOrder
    titre?: SortOrder
    description?: SortOrder
    lien_image?: SortOrder
    star?: SortOrder
    nombre_aime?: SortOrder
    nombre_non_aime?: SortOrder
    nombre_vue?: SortOrder
    cree_le?: SortOrder
    modifie_le?: SortOrder
    id_medecin?: SortOrder
  }

  export type PostsSumOrderByAggregateInput = {
    star?: SortOrder
    nombre_aime?: SortOrder
    nombre_non_aime?: SortOrder
    nombre_vue?: SortOrder
  }

  export type PostsScalarRelationFilter = {
    is?: PostsWhereInput
    isNot?: PostsWhereInput
  }

  export type CommentairesCountOrderByAggregateInput = {
    id_commentaire?: SortOrder
    commentaire?: SortOrder
    cree_le?: SortOrder
    modifie_le?: SortOrder
    id_post?: SortOrder
  }

  export type CommentairesMaxOrderByAggregateInput = {
    id_commentaire?: SortOrder
    commentaire?: SortOrder
    cree_le?: SortOrder
    modifie_le?: SortOrder
    id_post?: SortOrder
  }

  export type CommentairesMinOrderByAggregateInput = {
    id_commentaire?: SortOrder
    commentaire?: SortOrder
    cree_le?: SortOrder
    modifie_le?: SortOrder
    id_post?: SortOrder
  }

  export type FichiersListRelationFilter = {
    every?: FichiersWhereInput
    some?: FichiersWhereInput
    none?: FichiersWhereInput
  }

  export type FichiersOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ConsultationsCountOrderByAggregateInput = {
    id_consultation?: SortOrder
    diagnostique?: SortOrder
    cree_le?: SortOrder
    modifie_le?: SortOrder
    id_patient?: SortOrder
    id_medecin?: SortOrder
  }

  export type ConsultationsMaxOrderByAggregateInput = {
    id_consultation?: SortOrder
    diagnostique?: SortOrder
    cree_le?: SortOrder
    modifie_le?: SortOrder
    id_patient?: SortOrder
    id_medecin?: SortOrder
  }

  export type ConsultationsMinOrderByAggregateInput = {
    id_consultation?: SortOrder
    diagnostique?: SortOrder
    cree_le?: SortOrder
    modifie_le?: SortOrder
    id_patient?: SortOrder
    id_medecin?: SortOrder
  }

  export type ConsultationsScalarRelationFilter = {
    is?: ConsultationsWhereInput
    isNot?: ConsultationsWhereInput
  }

  export type FichiersCountOrderByAggregateInput = {
    id_fichier?: SortOrder
    lien_fichier?: SortOrder
    cree_le?: SortOrder
    modifie_le?: SortOrder
    id_consultation?: SortOrder
  }

  export type FichiersMaxOrderByAggregateInput = {
    id_fichier?: SortOrder
    lien_fichier?: SortOrder
    cree_le?: SortOrder
    modifie_le?: SortOrder
    id_consultation?: SortOrder
  }

  export type FichiersMinOrderByAggregateInput = {
    id_fichier?: SortOrder
    lien_fichier?: SortOrder
    cree_le?: SortOrder
    modifie_le?: SortOrder
    id_consultation?: SortOrder
  }

  export type SessionCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type AccountCreateNestedManyWithoutUserInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
  }

  export type SignalementsCreateNestedManyWithoutUserInput = {
    create?: XOR<SignalementsCreateWithoutUserInput, SignalementsUncheckedCreateWithoutUserInput> | SignalementsCreateWithoutUserInput[] | SignalementsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SignalementsCreateOrConnectWithoutUserInput | SignalementsCreateOrConnectWithoutUserInput[]
    createMany?: SignalementsCreateManyUserInputEnvelope
    connect?: SignalementsWhereUniqueInput | SignalementsWhereUniqueInput[]
  }

  export type PatientsCreateNestedManyWithoutUserInput = {
    create?: XOR<PatientsCreateWithoutUserInput, PatientsUncheckedCreateWithoutUserInput> | PatientsCreateWithoutUserInput[] | PatientsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PatientsCreateOrConnectWithoutUserInput | PatientsCreateOrConnectWithoutUserInput[]
    createMany?: PatientsCreateManyUserInputEnvelope
    connect?: PatientsWhereUniqueInput | PatientsWhereUniqueInput[]
  }

  export type MedecinsCreateNestedManyWithoutUserInput = {
    create?: XOR<MedecinsCreateWithoutUserInput, MedecinsUncheckedCreateWithoutUserInput> | MedecinsCreateWithoutUserInput[] | MedecinsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MedecinsCreateOrConnectWithoutUserInput | MedecinsCreateOrConnectWithoutUserInput[]
    createMany?: MedecinsCreateManyUserInputEnvelope
    connect?: MedecinsWhereUniqueInput | MedecinsWhereUniqueInput[]
  }

  export type SessionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type AccountUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
  }

  export type SignalementsUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SignalementsCreateWithoutUserInput, SignalementsUncheckedCreateWithoutUserInput> | SignalementsCreateWithoutUserInput[] | SignalementsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SignalementsCreateOrConnectWithoutUserInput | SignalementsCreateOrConnectWithoutUserInput[]
    createMany?: SignalementsCreateManyUserInputEnvelope
    connect?: SignalementsWhereUniqueInput | SignalementsWhereUniqueInput[]
  }

  export type PatientsUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<PatientsCreateWithoutUserInput, PatientsUncheckedCreateWithoutUserInput> | PatientsCreateWithoutUserInput[] | PatientsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PatientsCreateOrConnectWithoutUserInput | PatientsCreateOrConnectWithoutUserInput[]
    createMany?: PatientsCreateManyUserInputEnvelope
    connect?: PatientsWhereUniqueInput | PatientsWhereUniqueInput[]
  }

  export type MedecinsUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<MedecinsCreateWithoutUserInput, MedecinsUncheckedCreateWithoutUserInput> | MedecinsCreateWithoutUserInput[] | MedecinsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MedecinsCreateOrConnectWithoutUserInput | MedecinsCreateOrConnectWithoutUserInput[]
    createMany?: MedecinsCreateManyUserInputEnvelope
    connect?: MedecinsWhereUniqueInput | MedecinsWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableEnumSEXEFieldUpdateOperationsInput = {
    set?: $Enums.SEXE | null
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type SessionUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutUserInput | SessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutUserInput | SessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutUserInput | SessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type AccountUpdateManyWithoutUserNestedInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    upsert?: AccountUpsertWithWhereUniqueWithoutUserInput | AccountUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    set?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    disconnect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    delete?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    update?: AccountUpdateWithWhereUniqueWithoutUserInput | AccountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AccountUpdateManyWithWhereWithoutUserInput | AccountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AccountScalarWhereInput | AccountScalarWhereInput[]
  }

  export type SignalementsUpdateManyWithoutUserNestedInput = {
    create?: XOR<SignalementsCreateWithoutUserInput, SignalementsUncheckedCreateWithoutUserInput> | SignalementsCreateWithoutUserInput[] | SignalementsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SignalementsCreateOrConnectWithoutUserInput | SignalementsCreateOrConnectWithoutUserInput[]
    upsert?: SignalementsUpsertWithWhereUniqueWithoutUserInput | SignalementsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SignalementsCreateManyUserInputEnvelope
    set?: SignalementsWhereUniqueInput | SignalementsWhereUniqueInput[]
    disconnect?: SignalementsWhereUniqueInput | SignalementsWhereUniqueInput[]
    delete?: SignalementsWhereUniqueInput | SignalementsWhereUniqueInput[]
    connect?: SignalementsWhereUniqueInput | SignalementsWhereUniqueInput[]
    update?: SignalementsUpdateWithWhereUniqueWithoutUserInput | SignalementsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SignalementsUpdateManyWithWhereWithoutUserInput | SignalementsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SignalementsScalarWhereInput | SignalementsScalarWhereInput[]
  }

  export type PatientsUpdateManyWithoutUserNestedInput = {
    create?: XOR<PatientsCreateWithoutUserInput, PatientsUncheckedCreateWithoutUserInput> | PatientsCreateWithoutUserInput[] | PatientsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PatientsCreateOrConnectWithoutUserInput | PatientsCreateOrConnectWithoutUserInput[]
    upsert?: PatientsUpsertWithWhereUniqueWithoutUserInput | PatientsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PatientsCreateManyUserInputEnvelope
    set?: PatientsWhereUniqueInput | PatientsWhereUniqueInput[]
    disconnect?: PatientsWhereUniqueInput | PatientsWhereUniqueInput[]
    delete?: PatientsWhereUniqueInput | PatientsWhereUniqueInput[]
    connect?: PatientsWhereUniqueInput | PatientsWhereUniqueInput[]
    update?: PatientsUpdateWithWhereUniqueWithoutUserInput | PatientsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PatientsUpdateManyWithWhereWithoutUserInput | PatientsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PatientsScalarWhereInput | PatientsScalarWhereInput[]
  }

  export type MedecinsUpdateManyWithoutUserNestedInput = {
    create?: XOR<MedecinsCreateWithoutUserInput, MedecinsUncheckedCreateWithoutUserInput> | MedecinsCreateWithoutUserInput[] | MedecinsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MedecinsCreateOrConnectWithoutUserInput | MedecinsCreateOrConnectWithoutUserInput[]
    upsert?: MedecinsUpsertWithWhereUniqueWithoutUserInput | MedecinsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: MedecinsCreateManyUserInputEnvelope
    set?: MedecinsWhereUniqueInput | MedecinsWhereUniqueInput[]
    disconnect?: MedecinsWhereUniqueInput | MedecinsWhereUniqueInput[]
    delete?: MedecinsWhereUniqueInput | MedecinsWhereUniqueInput[]
    connect?: MedecinsWhereUniqueInput | MedecinsWhereUniqueInput[]
    update?: MedecinsUpdateWithWhereUniqueWithoutUserInput | MedecinsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: MedecinsUpdateManyWithWhereWithoutUserInput | MedecinsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: MedecinsScalarWhereInput | MedecinsScalarWhereInput[]
  }

  export type SessionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutUserInput | SessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutUserInput | SessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutUserInput | SessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type AccountUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    upsert?: AccountUpsertWithWhereUniqueWithoutUserInput | AccountUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    set?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    disconnect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    delete?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    update?: AccountUpdateWithWhereUniqueWithoutUserInput | AccountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AccountUpdateManyWithWhereWithoutUserInput | AccountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AccountScalarWhereInput | AccountScalarWhereInput[]
  }

  export type SignalementsUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SignalementsCreateWithoutUserInput, SignalementsUncheckedCreateWithoutUserInput> | SignalementsCreateWithoutUserInput[] | SignalementsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SignalementsCreateOrConnectWithoutUserInput | SignalementsCreateOrConnectWithoutUserInput[]
    upsert?: SignalementsUpsertWithWhereUniqueWithoutUserInput | SignalementsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SignalementsCreateManyUserInputEnvelope
    set?: SignalementsWhereUniqueInput | SignalementsWhereUniqueInput[]
    disconnect?: SignalementsWhereUniqueInput | SignalementsWhereUniqueInput[]
    delete?: SignalementsWhereUniqueInput | SignalementsWhereUniqueInput[]
    connect?: SignalementsWhereUniqueInput | SignalementsWhereUniqueInput[]
    update?: SignalementsUpdateWithWhereUniqueWithoutUserInput | SignalementsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SignalementsUpdateManyWithWhereWithoutUserInput | SignalementsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SignalementsScalarWhereInput | SignalementsScalarWhereInput[]
  }

  export type PatientsUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<PatientsCreateWithoutUserInput, PatientsUncheckedCreateWithoutUserInput> | PatientsCreateWithoutUserInput[] | PatientsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PatientsCreateOrConnectWithoutUserInput | PatientsCreateOrConnectWithoutUserInput[]
    upsert?: PatientsUpsertWithWhereUniqueWithoutUserInput | PatientsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PatientsCreateManyUserInputEnvelope
    set?: PatientsWhereUniqueInput | PatientsWhereUniqueInput[]
    disconnect?: PatientsWhereUniqueInput | PatientsWhereUniqueInput[]
    delete?: PatientsWhereUniqueInput | PatientsWhereUniqueInput[]
    connect?: PatientsWhereUniqueInput | PatientsWhereUniqueInput[]
    update?: PatientsUpdateWithWhereUniqueWithoutUserInput | PatientsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PatientsUpdateManyWithWhereWithoutUserInput | PatientsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PatientsScalarWhereInput | PatientsScalarWhereInput[]
  }

  export type MedecinsUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<MedecinsCreateWithoutUserInput, MedecinsUncheckedCreateWithoutUserInput> | MedecinsCreateWithoutUserInput[] | MedecinsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MedecinsCreateOrConnectWithoutUserInput | MedecinsCreateOrConnectWithoutUserInput[]
    upsert?: MedecinsUpsertWithWhereUniqueWithoutUserInput | MedecinsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: MedecinsCreateManyUserInputEnvelope
    set?: MedecinsWhereUniqueInput | MedecinsWhereUniqueInput[]
    disconnect?: MedecinsWhereUniqueInput | MedecinsWhereUniqueInput[]
    delete?: MedecinsWhereUniqueInput | MedecinsWhereUniqueInput[]
    connect?: MedecinsWhereUniqueInput | MedecinsWhereUniqueInput[]
    update?: MedecinsUpdateWithWhereUniqueWithoutUserInput | MedecinsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: MedecinsUpdateManyWithWhereWithoutUserInput | MedecinsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: MedecinsScalarWhereInput | MedecinsScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutSessionsInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutSessionsNestedInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    upsert?: UserUpsertWithoutSessionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSessionsInput, UserUpdateWithoutSessionsInput>, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type UserCreateNestedOneWithoutAccountsInput = {
    create?: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccountsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutAccountsNestedInput = {
    create?: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccountsInput
    upsert?: UserUpsertWithoutAccountsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAccountsInput, UserUpdateWithoutAccountsInput>, UserUncheckedUpdateWithoutAccountsInput>
  }

  export type UserCreateNestedOneWithoutSignalementsInput = {
    create?: XOR<UserCreateWithoutSignalementsInput, UserUncheckedCreateWithoutSignalementsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSignalementsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutSignalementsNestedInput = {
    create?: XOR<UserCreateWithoutSignalementsInput, UserUncheckedCreateWithoutSignalementsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSignalementsInput
    upsert?: UserUpsertWithoutSignalementsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSignalementsInput, UserUpdateWithoutSignalementsInput>, UserUncheckedUpdateWithoutSignalementsInput>
  }

  export type UserCreateNestedOneWithoutPatientInput = {
    create?: XOR<UserCreateWithoutPatientInput, UserUncheckedCreateWithoutPatientInput>
    connectOrCreate?: UserCreateOrConnectWithoutPatientInput
    connect?: UserWhereUniqueInput
  }

  export type RendezVousCreateNestedManyWithoutPatientsInput = {
    create?: XOR<RendezVousCreateWithoutPatientsInput, RendezVousUncheckedCreateWithoutPatientsInput> | RendezVousCreateWithoutPatientsInput[] | RendezVousUncheckedCreateWithoutPatientsInput[]
    connectOrCreate?: RendezVousCreateOrConnectWithoutPatientsInput | RendezVousCreateOrConnectWithoutPatientsInput[]
    createMany?: RendezVousCreateManyPatientsInputEnvelope
    connect?: RendezVousWhereUniqueInput | RendezVousWhereUniqueInput[]
  }

  export type ConsultationsCreateNestedManyWithoutPatientInput = {
    create?: XOR<ConsultationsCreateWithoutPatientInput, ConsultationsUncheckedCreateWithoutPatientInput> | ConsultationsCreateWithoutPatientInput[] | ConsultationsUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: ConsultationsCreateOrConnectWithoutPatientInput | ConsultationsCreateOrConnectWithoutPatientInput[]
    createMany?: ConsultationsCreateManyPatientInputEnvelope
    connect?: ConsultationsWhereUniqueInput | ConsultationsWhereUniqueInput[]
  }

  export type RendezVousUncheckedCreateNestedManyWithoutPatientsInput = {
    create?: XOR<RendezVousCreateWithoutPatientsInput, RendezVousUncheckedCreateWithoutPatientsInput> | RendezVousCreateWithoutPatientsInput[] | RendezVousUncheckedCreateWithoutPatientsInput[]
    connectOrCreate?: RendezVousCreateOrConnectWithoutPatientsInput | RendezVousCreateOrConnectWithoutPatientsInput[]
    createMany?: RendezVousCreateManyPatientsInputEnvelope
    connect?: RendezVousWhereUniqueInput | RendezVousWhereUniqueInput[]
  }

  export type ConsultationsUncheckedCreateNestedManyWithoutPatientInput = {
    create?: XOR<ConsultationsCreateWithoutPatientInput, ConsultationsUncheckedCreateWithoutPatientInput> | ConsultationsCreateWithoutPatientInput[] | ConsultationsUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: ConsultationsCreateOrConnectWithoutPatientInput | ConsultationsCreateOrConnectWithoutPatientInput[]
    createMany?: ConsultationsCreateManyPatientInputEnvelope
    connect?: ConsultationsWhereUniqueInput | ConsultationsWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutPatientNestedInput = {
    create?: XOR<UserCreateWithoutPatientInput, UserUncheckedCreateWithoutPatientInput>
    connectOrCreate?: UserCreateOrConnectWithoutPatientInput
    upsert?: UserUpsertWithoutPatientInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPatientInput, UserUpdateWithoutPatientInput>, UserUncheckedUpdateWithoutPatientInput>
  }

  export type RendezVousUpdateManyWithoutPatientsNestedInput = {
    create?: XOR<RendezVousCreateWithoutPatientsInput, RendezVousUncheckedCreateWithoutPatientsInput> | RendezVousCreateWithoutPatientsInput[] | RendezVousUncheckedCreateWithoutPatientsInput[]
    connectOrCreate?: RendezVousCreateOrConnectWithoutPatientsInput | RendezVousCreateOrConnectWithoutPatientsInput[]
    upsert?: RendezVousUpsertWithWhereUniqueWithoutPatientsInput | RendezVousUpsertWithWhereUniqueWithoutPatientsInput[]
    createMany?: RendezVousCreateManyPatientsInputEnvelope
    set?: RendezVousWhereUniqueInput | RendezVousWhereUniqueInput[]
    disconnect?: RendezVousWhereUniqueInput | RendezVousWhereUniqueInput[]
    delete?: RendezVousWhereUniqueInput | RendezVousWhereUniqueInput[]
    connect?: RendezVousWhereUniqueInput | RendezVousWhereUniqueInput[]
    update?: RendezVousUpdateWithWhereUniqueWithoutPatientsInput | RendezVousUpdateWithWhereUniqueWithoutPatientsInput[]
    updateMany?: RendezVousUpdateManyWithWhereWithoutPatientsInput | RendezVousUpdateManyWithWhereWithoutPatientsInput[]
    deleteMany?: RendezVousScalarWhereInput | RendezVousScalarWhereInput[]
  }

  export type ConsultationsUpdateManyWithoutPatientNestedInput = {
    create?: XOR<ConsultationsCreateWithoutPatientInput, ConsultationsUncheckedCreateWithoutPatientInput> | ConsultationsCreateWithoutPatientInput[] | ConsultationsUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: ConsultationsCreateOrConnectWithoutPatientInput | ConsultationsCreateOrConnectWithoutPatientInput[]
    upsert?: ConsultationsUpsertWithWhereUniqueWithoutPatientInput | ConsultationsUpsertWithWhereUniqueWithoutPatientInput[]
    createMany?: ConsultationsCreateManyPatientInputEnvelope
    set?: ConsultationsWhereUniqueInput | ConsultationsWhereUniqueInput[]
    disconnect?: ConsultationsWhereUniqueInput | ConsultationsWhereUniqueInput[]
    delete?: ConsultationsWhereUniqueInput | ConsultationsWhereUniqueInput[]
    connect?: ConsultationsWhereUniqueInput | ConsultationsWhereUniqueInput[]
    update?: ConsultationsUpdateWithWhereUniqueWithoutPatientInput | ConsultationsUpdateWithWhereUniqueWithoutPatientInput[]
    updateMany?: ConsultationsUpdateManyWithWhereWithoutPatientInput | ConsultationsUpdateManyWithWhereWithoutPatientInput[]
    deleteMany?: ConsultationsScalarWhereInput | ConsultationsScalarWhereInput[]
  }

  export type RendezVousUncheckedUpdateManyWithoutPatientsNestedInput = {
    create?: XOR<RendezVousCreateWithoutPatientsInput, RendezVousUncheckedCreateWithoutPatientsInput> | RendezVousCreateWithoutPatientsInput[] | RendezVousUncheckedCreateWithoutPatientsInput[]
    connectOrCreate?: RendezVousCreateOrConnectWithoutPatientsInput | RendezVousCreateOrConnectWithoutPatientsInput[]
    upsert?: RendezVousUpsertWithWhereUniqueWithoutPatientsInput | RendezVousUpsertWithWhereUniqueWithoutPatientsInput[]
    createMany?: RendezVousCreateManyPatientsInputEnvelope
    set?: RendezVousWhereUniqueInput | RendezVousWhereUniqueInput[]
    disconnect?: RendezVousWhereUniqueInput | RendezVousWhereUniqueInput[]
    delete?: RendezVousWhereUniqueInput | RendezVousWhereUniqueInput[]
    connect?: RendezVousWhereUniqueInput | RendezVousWhereUniqueInput[]
    update?: RendezVousUpdateWithWhereUniqueWithoutPatientsInput | RendezVousUpdateWithWhereUniqueWithoutPatientsInput[]
    updateMany?: RendezVousUpdateManyWithWhereWithoutPatientsInput | RendezVousUpdateManyWithWhereWithoutPatientsInput[]
    deleteMany?: RendezVousScalarWhereInput | RendezVousScalarWhereInput[]
  }

  export type ConsultationsUncheckedUpdateManyWithoutPatientNestedInput = {
    create?: XOR<ConsultationsCreateWithoutPatientInput, ConsultationsUncheckedCreateWithoutPatientInput> | ConsultationsCreateWithoutPatientInput[] | ConsultationsUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: ConsultationsCreateOrConnectWithoutPatientInput | ConsultationsCreateOrConnectWithoutPatientInput[]
    upsert?: ConsultationsUpsertWithWhereUniqueWithoutPatientInput | ConsultationsUpsertWithWhereUniqueWithoutPatientInput[]
    createMany?: ConsultationsCreateManyPatientInputEnvelope
    set?: ConsultationsWhereUniqueInput | ConsultationsWhereUniqueInput[]
    disconnect?: ConsultationsWhereUniqueInput | ConsultationsWhereUniqueInput[]
    delete?: ConsultationsWhereUniqueInput | ConsultationsWhereUniqueInput[]
    connect?: ConsultationsWhereUniqueInput | ConsultationsWhereUniqueInput[]
    update?: ConsultationsUpdateWithWhereUniqueWithoutPatientInput | ConsultationsUpdateWithWhereUniqueWithoutPatientInput[]
    updateMany?: ConsultationsUpdateManyWithWhereWithoutPatientInput | ConsultationsUpdateManyWithWhereWithoutPatientInput[]
    deleteMany?: ConsultationsScalarWhereInput | ConsultationsScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutMedecinInput = {
    create?: XOR<UserCreateWithoutMedecinInput, UserUncheckedCreateWithoutMedecinInput>
    connectOrCreate?: UserCreateOrConnectWithoutMedecinInput
    connect?: UserWhereUniqueInput
  }

  export type RendezVousCreateNestedManyWithoutMedecinsInput = {
    create?: XOR<RendezVousCreateWithoutMedecinsInput, RendezVousUncheckedCreateWithoutMedecinsInput> | RendezVousCreateWithoutMedecinsInput[] | RendezVousUncheckedCreateWithoutMedecinsInput[]
    connectOrCreate?: RendezVousCreateOrConnectWithoutMedecinsInput | RendezVousCreateOrConnectWithoutMedecinsInput[]
    createMany?: RendezVousCreateManyMedecinsInputEnvelope
    connect?: RendezVousWhereUniqueInput | RendezVousWhereUniqueInput[]
  }

  export type PostsCreateNestedManyWithoutMedecinsInput = {
    create?: XOR<PostsCreateWithoutMedecinsInput, PostsUncheckedCreateWithoutMedecinsInput> | PostsCreateWithoutMedecinsInput[] | PostsUncheckedCreateWithoutMedecinsInput[]
    connectOrCreate?: PostsCreateOrConnectWithoutMedecinsInput | PostsCreateOrConnectWithoutMedecinsInput[]
    createMany?: PostsCreateManyMedecinsInputEnvelope
    connect?: PostsWhereUniqueInput | PostsWhereUniqueInput[]
  }

  export type ConsultationsCreateNestedManyWithoutMedecinInput = {
    create?: XOR<ConsultationsCreateWithoutMedecinInput, ConsultationsUncheckedCreateWithoutMedecinInput> | ConsultationsCreateWithoutMedecinInput[] | ConsultationsUncheckedCreateWithoutMedecinInput[]
    connectOrCreate?: ConsultationsCreateOrConnectWithoutMedecinInput | ConsultationsCreateOrConnectWithoutMedecinInput[]
    createMany?: ConsultationsCreateManyMedecinInputEnvelope
    connect?: ConsultationsWhereUniqueInput | ConsultationsWhereUniqueInput[]
  }

  export type RendezVousUncheckedCreateNestedManyWithoutMedecinsInput = {
    create?: XOR<RendezVousCreateWithoutMedecinsInput, RendezVousUncheckedCreateWithoutMedecinsInput> | RendezVousCreateWithoutMedecinsInput[] | RendezVousUncheckedCreateWithoutMedecinsInput[]
    connectOrCreate?: RendezVousCreateOrConnectWithoutMedecinsInput | RendezVousCreateOrConnectWithoutMedecinsInput[]
    createMany?: RendezVousCreateManyMedecinsInputEnvelope
    connect?: RendezVousWhereUniqueInput | RendezVousWhereUniqueInput[]
  }

  export type PostsUncheckedCreateNestedManyWithoutMedecinsInput = {
    create?: XOR<PostsCreateWithoutMedecinsInput, PostsUncheckedCreateWithoutMedecinsInput> | PostsCreateWithoutMedecinsInput[] | PostsUncheckedCreateWithoutMedecinsInput[]
    connectOrCreate?: PostsCreateOrConnectWithoutMedecinsInput | PostsCreateOrConnectWithoutMedecinsInput[]
    createMany?: PostsCreateManyMedecinsInputEnvelope
    connect?: PostsWhereUniqueInput | PostsWhereUniqueInput[]
  }

  export type ConsultationsUncheckedCreateNestedManyWithoutMedecinInput = {
    create?: XOR<ConsultationsCreateWithoutMedecinInput, ConsultationsUncheckedCreateWithoutMedecinInput> | ConsultationsCreateWithoutMedecinInput[] | ConsultationsUncheckedCreateWithoutMedecinInput[]
    connectOrCreate?: ConsultationsCreateOrConnectWithoutMedecinInput | ConsultationsCreateOrConnectWithoutMedecinInput[]
    createMany?: ConsultationsCreateManyMedecinInputEnvelope
    connect?: ConsultationsWhereUniqueInput | ConsultationsWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutMedecinNestedInput = {
    create?: XOR<UserCreateWithoutMedecinInput, UserUncheckedCreateWithoutMedecinInput>
    connectOrCreate?: UserCreateOrConnectWithoutMedecinInput
    upsert?: UserUpsertWithoutMedecinInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutMedecinInput, UserUpdateWithoutMedecinInput>, UserUncheckedUpdateWithoutMedecinInput>
  }

  export type RendezVousUpdateManyWithoutMedecinsNestedInput = {
    create?: XOR<RendezVousCreateWithoutMedecinsInput, RendezVousUncheckedCreateWithoutMedecinsInput> | RendezVousCreateWithoutMedecinsInput[] | RendezVousUncheckedCreateWithoutMedecinsInput[]
    connectOrCreate?: RendezVousCreateOrConnectWithoutMedecinsInput | RendezVousCreateOrConnectWithoutMedecinsInput[]
    upsert?: RendezVousUpsertWithWhereUniqueWithoutMedecinsInput | RendezVousUpsertWithWhereUniqueWithoutMedecinsInput[]
    createMany?: RendezVousCreateManyMedecinsInputEnvelope
    set?: RendezVousWhereUniqueInput | RendezVousWhereUniqueInput[]
    disconnect?: RendezVousWhereUniqueInput | RendezVousWhereUniqueInput[]
    delete?: RendezVousWhereUniqueInput | RendezVousWhereUniqueInput[]
    connect?: RendezVousWhereUniqueInput | RendezVousWhereUniqueInput[]
    update?: RendezVousUpdateWithWhereUniqueWithoutMedecinsInput | RendezVousUpdateWithWhereUniqueWithoutMedecinsInput[]
    updateMany?: RendezVousUpdateManyWithWhereWithoutMedecinsInput | RendezVousUpdateManyWithWhereWithoutMedecinsInput[]
    deleteMany?: RendezVousScalarWhereInput | RendezVousScalarWhereInput[]
  }

  export type PostsUpdateManyWithoutMedecinsNestedInput = {
    create?: XOR<PostsCreateWithoutMedecinsInput, PostsUncheckedCreateWithoutMedecinsInput> | PostsCreateWithoutMedecinsInput[] | PostsUncheckedCreateWithoutMedecinsInput[]
    connectOrCreate?: PostsCreateOrConnectWithoutMedecinsInput | PostsCreateOrConnectWithoutMedecinsInput[]
    upsert?: PostsUpsertWithWhereUniqueWithoutMedecinsInput | PostsUpsertWithWhereUniqueWithoutMedecinsInput[]
    createMany?: PostsCreateManyMedecinsInputEnvelope
    set?: PostsWhereUniqueInput | PostsWhereUniqueInput[]
    disconnect?: PostsWhereUniqueInput | PostsWhereUniqueInput[]
    delete?: PostsWhereUniqueInput | PostsWhereUniqueInput[]
    connect?: PostsWhereUniqueInput | PostsWhereUniqueInput[]
    update?: PostsUpdateWithWhereUniqueWithoutMedecinsInput | PostsUpdateWithWhereUniqueWithoutMedecinsInput[]
    updateMany?: PostsUpdateManyWithWhereWithoutMedecinsInput | PostsUpdateManyWithWhereWithoutMedecinsInput[]
    deleteMany?: PostsScalarWhereInput | PostsScalarWhereInput[]
  }

  export type ConsultationsUpdateManyWithoutMedecinNestedInput = {
    create?: XOR<ConsultationsCreateWithoutMedecinInput, ConsultationsUncheckedCreateWithoutMedecinInput> | ConsultationsCreateWithoutMedecinInput[] | ConsultationsUncheckedCreateWithoutMedecinInput[]
    connectOrCreate?: ConsultationsCreateOrConnectWithoutMedecinInput | ConsultationsCreateOrConnectWithoutMedecinInput[]
    upsert?: ConsultationsUpsertWithWhereUniqueWithoutMedecinInput | ConsultationsUpsertWithWhereUniqueWithoutMedecinInput[]
    createMany?: ConsultationsCreateManyMedecinInputEnvelope
    set?: ConsultationsWhereUniqueInput | ConsultationsWhereUniqueInput[]
    disconnect?: ConsultationsWhereUniqueInput | ConsultationsWhereUniqueInput[]
    delete?: ConsultationsWhereUniqueInput | ConsultationsWhereUniqueInput[]
    connect?: ConsultationsWhereUniqueInput | ConsultationsWhereUniqueInput[]
    update?: ConsultationsUpdateWithWhereUniqueWithoutMedecinInput | ConsultationsUpdateWithWhereUniqueWithoutMedecinInput[]
    updateMany?: ConsultationsUpdateManyWithWhereWithoutMedecinInput | ConsultationsUpdateManyWithWhereWithoutMedecinInput[]
    deleteMany?: ConsultationsScalarWhereInput | ConsultationsScalarWhereInput[]
  }

  export type RendezVousUncheckedUpdateManyWithoutMedecinsNestedInput = {
    create?: XOR<RendezVousCreateWithoutMedecinsInput, RendezVousUncheckedCreateWithoutMedecinsInput> | RendezVousCreateWithoutMedecinsInput[] | RendezVousUncheckedCreateWithoutMedecinsInput[]
    connectOrCreate?: RendezVousCreateOrConnectWithoutMedecinsInput | RendezVousCreateOrConnectWithoutMedecinsInput[]
    upsert?: RendezVousUpsertWithWhereUniqueWithoutMedecinsInput | RendezVousUpsertWithWhereUniqueWithoutMedecinsInput[]
    createMany?: RendezVousCreateManyMedecinsInputEnvelope
    set?: RendezVousWhereUniqueInput | RendezVousWhereUniqueInput[]
    disconnect?: RendezVousWhereUniqueInput | RendezVousWhereUniqueInput[]
    delete?: RendezVousWhereUniqueInput | RendezVousWhereUniqueInput[]
    connect?: RendezVousWhereUniqueInput | RendezVousWhereUniqueInput[]
    update?: RendezVousUpdateWithWhereUniqueWithoutMedecinsInput | RendezVousUpdateWithWhereUniqueWithoutMedecinsInput[]
    updateMany?: RendezVousUpdateManyWithWhereWithoutMedecinsInput | RendezVousUpdateManyWithWhereWithoutMedecinsInput[]
    deleteMany?: RendezVousScalarWhereInput | RendezVousScalarWhereInput[]
  }

  export type PostsUncheckedUpdateManyWithoutMedecinsNestedInput = {
    create?: XOR<PostsCreateWithoutMedecinsInput, PostsUncheckedCreateWithoutMedecinsInput> | PostsCreateWithoutMedecinsInput[] | PostsUncheckedCreateWithoutMedecinsInput[]
    connectOrCreate?: PostsCreateOrConnectWithoutMedecinsInput | PostsCreateOrConnectWithoutMedecinsInput[]
    upsert?: PostsUpsertWithWhereUniqueWithoutMedecinsInput | PostsUpsertWithWhereUniqueWithoutMedecinsInput[]
    createMany?: PostsCreateManyMedecinsInputEnvelope
    set?: PostsWhereUniqueInput | PostsWhereUniqueInput[]
    disconnect?: PostsWhereUniqueInput | PostsWhereUniqueInput[]
    delete?: PostsWhereUniqueInput | PostsWhereUniqueInput[]
    connect?: PostsWhereUniqueInput | PostsWhereUniqueInput[]
    update?: PostsUpdateWithWhereUniqueWithoutMedecinsInput | PostsUpdateWithWhereUniqueWithoutMedecinsInput[]
    updateMany?: PostsUpdateManyWithWhereWithoutMedecinsInput | PostsUpdateManyWithWhereWithoutMedecinsInput[]
    deleteMany?: PostsScalarWhereInput | PostsScalarWhereInput[]
  }

  export type ConsultationsUncheckedUpdateManyWithoutMedecinNestedInput = {
    create?: XOR<ConsultationsCreateWithoutMedecinInput, ConsultationsUncheckedCreateWithoutMedecinInput> | ConsultationsCreateWithoutMedecinInput[] | ConsultationsUncheckedCreateWithoutMedecinInput[]
    connectOrCreate?: ConsultationsCreateOrConnectWithoutMedecinInput | ConsultationsCreateOrConnectWithoutMedecinInput[]
    upsert?: ConsultationsUpsertWithWhereUniqueWithoutMedecinInput | ConsultationsUpsertWithWhereUniqueWithoutMedecinInput[]
    createMany?: ConsultationsCreateManyMedecinInputEnvelope
    set?: ConsultationsWhereUniqueInput | ConsultationsWhereUniqueInput[]
    disconnect?: ConsultationsWhereUniqueInput | ConsultationsWhereUniqueInput[]
    delete?: ConsultationsWhereUniqueInput | ConsultationsWhereUniqueInput[]
    connect?: ConsultationsWhereUniqueInput | ConsultationsWhereUniqueInput[]
    update?: ConsultationsUpdateWithWhereUniqueWithoutMedecinInput | ConsultationsUpdateWithWhereUniqueWithoutMedecinInput[]
    updateMany?: ConsultationsUpdateManyWithWhereWithoutMedecinInput | ConsultationsUpdateManyWithWhereWithoutMedecinInput[]
    deleteMany?: ConsultationsScalarWhereInput | ConsultationsScalarWhereInput[]
  }

  export type PatientsCreateNestedOneWithoutRendezVousInput = {
    create?: XOR<PatientsCreateWithoutRendezVousInput, PatientsUncheckedCreateWithoutRendezVousInput>
    connectOrCreate?: PatientsCreateOrConnectWithoutRendezVousInput
    connect?: PatientsWhereUniqueInput
  }

  export type MedecinsCreateNestedOneWithoutRendezVousInput = {
    create?: XOR<MedecinsCreateWithoutRendezVousInput, MedecinsUncheckedCreateWithoutRendezVousInput>
    connectOrCreate?: MedecinsCreateOrConnectWithoutRendezVousInput
    connect?: MedecinsWhereUniqueInput
  }

  export type EnumStatusRvdFieldUpdateOperationsInput = {
    set?: $Enums.StatusRvd
  }

  export type PatientsUpdateOneRequiredWithoutRendezVousNestedInput = {
    create?: XOR<PatientsCreateWithoutRendezVousInput, PatientsUncheckedCreateWithoutRendezVousInput>
    connectOrCreate?: PatientsCreateOrConnectWithoutRendezVousInput
    upsert?: PatientsUpsertWithoutRendezVousInput
    connect?: PatientsWhereUniqueInput
    update?: XOR<XOR<PatientsUpdateToOneWithWhereWithoutRendezVousInput, PatientsUpdateWithoutRendezVousInput>, PatientsUncheckedUpdateWithoutRendezVousInput>
  }

  export type MedecinsUpdateOneRequiredWithoutRendezVousNestedInput = {
    create?: XOR<MedecinsCreateWithoutRendezVousInput, MedecinsUncheckedCreateWithoutRendezVousInput>
    connectOrCreate?: MedecinsCreateOrConnectWithoutRendezVousInput
    upsert?: MedecinsUpsertWithoutRendezVousInput
    connect?: MedecinsWhereUniqueInput
    update?: XOR<XOR<MedecinsUpdateToOneWithWhereWithoutRendezVousInput, MedecinsUpdateWithoutRendezVousInput>, MedecinsUncheckedUpdateWithoutRendezVousInput>
  }

  export type MedecinsCreateNestedOneWithoutPostsInput = {
    create?: XOR<MedecinsCreateWithoutPostsInput, MedecinsUncheckedCreateWithoutPostsInput>
    connectOrCreate?: MedecinsCreateOrConnectWithoutPostsInput
    connect?: MedecinsWhereUniqueInput
  }

  export type CommentairesCreateNestedManyWithoutPostsInput = {
    create?: XOR<CommentairesCreateWithoutPostsInput, CommentairesUncheckedCreateWithoutPostsInput> | CommentairesCreateWithoutPostsInput[] | CommentairesUncheckedCreateWithoutPostsInput[]
    connectOrCreate?: CommentairesCreateOrConnectWithoutPostsInput | CommentairesCreateOrConnectWithoutPostsInput[]
    createMany?: CommentairesCreateManyPostsInputEnvelope
    connect?: CommentairesWhereUniqueInput | CommentairesWhereUniqueInput[]
  }

  export type CommentairesUncheckedCreateNestedManyWithoutPostsInput = {
    create?: XOR<CommentairesCreateWithoutPostsInput, CommentairesUncheckedCreateWithoutPostsInput> | CommentairesCreateWithoutPostsInput[] | CommentairesUncheckedCreateWithoutPostsInput[]
    connectOrCreate?: CommentairesCreateOrConnectWithoutPostsInput | CommentairesCreateOrConnectWithoutPostsInput[]
    createMany?: CommentairesCreateManyPostsInputEnvelope
    connect?: CommentairesWhereUniqueInput | CommentairesWhereUniqueInput[]
  }

  export type MedecinsUpdateOneRequiredWithoutPostsNestedInput = {
    create?: XOR<MedecinsCreateWithoutPostsInput, MedecinsUncheckedCreateWithoutPostsInput>
    connectOrCreate?: MedecinsCreateOrConnectWithoutPostsInput
    upsert?: MedecinsUpsertWithoutPostsInput
    connect?: MedecinsWhereUniqueInput
    update?: XOR<XOR<MedecinsUpdateToOneWithWhereWithoutPostsInput, MedecinsUpdateWithoutPostsInput>, MedecinsUncheckedUpdateWithoutPostsInput>
  }

  export type CommentairesUpdateManyWithoutPostsNestedInput = {
    create?: XOR<CommentairesCreateWithoutPostsInput, CommentairesUncheckedCreateWithoutPostsInput> | CommentairesCreateWithoutPostsInput[] | CommentairesUncheckedCreateWithoutPostsInput[]
    connectOrCreate?: CommentairesCreateOrConnectWithoutPostsInput | CommentairesCreateOrConnectWithoutPostsInput[]
    upsert?: CommentairesUpsertWithWhereUniqueWithoutPostsInput | CommentairesUpsertWithWhereUniqueWithoutPostsInput[]
    createMany?: CommentairesCreateManyPostsInputEnvelope
    set?: CommentairesWhereUniqueInput | CommentairesWhereUniqueInput[]
    disconnect?: CommentairesWhereUniqueInput | CommentairesWhereUniqueInput[]
    delete?: CommentairesWhereUniqueInput | CommentairesWhereUniqueInput[]
    connect?: CommentairesWhereUniqueInput | CommentairesWhereUniqueInput[]
    update?: CommentairesUpdateWithWhereUniqueWithoutPostsInput | CommentairesUpdateWithWhereUniqueWithoutPostsInput[]
    updateMany?: CommentairesUpdateManyWithWhereWithoutPostsInput | CommentairesUpdateManyWithWhereWithoutPostsInput[]
    deleteMany?: CommentairesScalarWhereInput | CommentairesScalarWhereInput[]
  }

  export type CommentairesUncheckedUpdateManyWithoutPostsNestedInput = {
    create?: XOR<CommentairesCreateWithoutPostsInput, CommentairesUncheckedCreateWithoutPostsInput> | CommentairesCreateWithoutPostsInput[] | CommentairesUncheckedCreateWithoutPostsInput[]
    connectOrCreate?: CommentairesCreateOrConnectWithoutPostsInput | CommentairesCreateOrConnectWithoutPostsInput[]
    upsert?: CommentairesUpsertWithWhereUniqueWithoutPostsInput | CommentairesUpsertWithWhereUniqueWithoutPostsInput[]
    createMany?: CommentairesCreateManyPostsInputEnvelope
    set?: CommentairesWhereUniqueInput | CommentairesWhereUniqueInput[]
    disconnect?: CommentairesWhereUniqueInput | CommentairesWhereUniqueInput[]
    delete?: CommentairesWhereUniqueInput | CommentairesWhereUniqueInput[]
    connect?: CommentairesWhereUniqueInput | CommentairesWhereUniqueInput[]
    update?: CommentairesUpdateWithWhereUniqueWithoutPostsInput | CommentairesUpdateWithWhereUniqueWithoutPostsInput[]
    updateMany?: CommentairesUpdateManyWithWhereWithoutPostsInput | CommentairesUpdateManyWithWhereWithoutPostsInput[]
    deleteMany?: CommentairesScalarWhereInput | CommentairesScalarWhereInput[]
  }

  export type PostsCreateNestedOneWithoutCommentairesInput = {
    create?: XOR<PostsCreateWithoutCommentairesInput, PostsUncheckedCreateWithoutCommentairesInput>
    connectOrCreate?: PostsCreateOrConnectWithoutCommentairesInput
    connect?: PostsWhereUniqueInput
  }

  export type PostsUpdateOneRequiredWithoutCommentairesNestedInput = {
    create?: XOR<PostsCreateWithoutCommentairesInput, PostsUncheckedCreateWithoutCommentairesInput>
    connectOrCreate?: PostsCreateOrConnectWithoutCommentairesInput
    upsert?: PostsUpsertWithoutCommentairesInput
    connect?: PostsWhereUniqueInput
    update?: XOR<XOR<PostsUpdateToOneWithWhereWithoutCommentairesInput, PostsUpdateWithoutCommentairesInput>, PostsUncheckedUpdateWithoutCommentairesInput>
  }

  export type PatientsCreateNestedOneWithoutConsultationsInput = {
    create?: XOR<PatientsCreateWithoutConsultationsInput, PatientsUncheckedCreateWithoutConsultationsInput>
    connectOrCreate?: PatientsCreateOrConnectWithoutConsultationsInput
    connect?: PatientsWhereUniqueInput
  }

  export type MedecinsCreateNestedOneWithoutConsultationsInput = {
    create?: XOR<MedecinsCreateWithoutConsultationsInput, MedecinsUncheckedCreateWithoutConsultationsInput>
    connectOrCreate?: MedecinsCreateOrConnectWithoutConsultationsInput
    connect?: MedecinsWhereUniqueInput
  }

  export type FichiersCreateNestedManyWithoutConsultationsInput = {
    create?: XOR<FichiersCreateWithoutConsultationsInput, FichiersUncheckedCreateWithoutConsultationsInput> | FichiersCreateWithoutConsultationsInput[] | FichiersUncheckedCreateWithoutConsultationsInput[]
    connectOrCreate?: FichiersCreateOrConnectWithoutConsultationsInput | FichiersCreateOrConnectWithoutConsultationsInput[]
    createMany?: FichiersCreateManyConsultationsInputEnvelope
    connect?: FichiersWhereUniqueInput | FichiersWhereUniqueInput[]
  }

  export type FichiersUncheckedCreateNestedManyWithoutConsultationsInput = {
    create?: XOR<FichiersCreateWithoutConsultationsInput, FichiersUncheckedCreateWithoutConsultationsInput> | FichiersCreateWithoutConsultationsInput[] | FichiersUncheckedCreateWithoutConsultationsInput[]
    connectOrCreate?: FichiersCreateOrConnectWithoutConsultationsInput | FichiersCreateOrConnectWithoutConsultationsInput[]
    createMany?: FichiersCreateManyConsultationsInputEnvelope
    connect?: FichiersWhereUniqueInput | FichiersWhereUniqueInput[]
  }

  export type PatientsUpdateOneRequiredWithoutConsultationsNestedInput = {
    create?: XOR<PatientsCreateWithoutConsultationsInput, PatientsUncheckedCreateWithoutConsultationsInput>
    connectOrCreate?: PatientsCreateOrConnectWithoutConsultationsInput
    upsert?: PatientsUpsertWithoutConsultationsInput
    connect?: PatientsWhereUniqueInput
    update?: XOR<XOR<PatientsUpdateToOneWithWhereWithoutConsultationsInput, PatientsUpdateWithoutConsultationsInput>, PatientsUncheckedUpdateWithoutConsultationsInput>
  }

  export type MedecinsUpdateOneRequiredWithoutConsultationsNestedInput = {
    create?: XOR<MedecinsCreateWithoutConsultationsInput, MedecinsUncheckedCreateWithoutConsultationsInput>
    connectOrCreate?: MedecinsCreateOrConnectWithoutConsultationsInput
    upsert?: MedecinsUpsertWithoutConsultationsInput
    connect?: MedecinsWhereUniqueInput
    update?: XOR<XOR<MedecinsUpdateToOneWithWhereWithoutConsultationsInput, MedecinsUpdateWithoutConsultationsInput>, MedecinsUncheckedUpdateWithoutConsultationsInput>
  }

  export type FichiersUpdateManyWithoutConsultationsNestedInput = {
    create?: XOR<FichiersCreateWithoutConsultationsInput, FichiersUncheckedCreateWithoutConsultationsInput> | FichiersCreateWithoutConsultationsInput[] | FichiersUncheckedCreateWithoutConsultationsInput[]
    connectOrCreate?: FichiersCreateOrConnectWithoutConsultationsInput | FichiersCreateOrConnectWithoutConsultationsInput[]
    upsert?: FichiersUpsertWithWhereUniqueWithoutConsultationsInput | FichiersUpsertWithWhereUniqueWithoutConsultationsInput[]
    createMany?: FichiersCreateManyConsultationsInputEnvelope
    set?: FichiersWhereUniqueInput | FichiersWhereUniqueInput[]
    disconnect?: FichiersWhereUniqueInput | FichiersWhereUniqueInput[]
    delete?: FichiersWhereUniqueInput | FichiersWhereUniqueInput[]
    connect?: FichiersWhereUniqueInput | FichiersWhereUniqueInput[]
    update?: FichiersUpdateWithWhereUniqueWithoutConsultationsInput | FichiersUpdateWithWhereUniqueWithoutConsultationsInput[]
    updateMany?: FichiersUpdateManyWithWhereWithoutConsultationsInput | FichiersUpdateManyWithWhereWithoutConsultationsInput[]
    deleteMany?: FichiersScalarWhereInput | FichiersScalarWhereInput[]
  }

  export type FichiersUncheckedUpdateManyWithoutConsultationsNestedInput = {
    create?: XOR<FichiersCreateWithoutConsultationsInput, FichiersUncheckedCreateWithoutConsultationsInput> | FichiersCreateWithoutConsultationsInput[] | FichiersUncheckedCreateWithoutConsultationsInput[]
    connectOrCreate?: FichiersCreateOrConnectWithoutConsultationsInput | FichiersCreateOrConnectWithoutConsultationsInput[]
    upsert?: FichiersUpsertWithWhereUniqueWithoutConsultationsInput | FichiersUpsertWithWhereUniqueWithoutConsultationsInput[]
    createMany?: FichiersCreateManyConsultationsInputEnvelope
    set?: FichiersWhereUniqueInput | FichiersWhereUniqueInput[]
    disconnect?: FichiersWhereUniqueInput | FichiersWhereUniqueInput[]
    delete?: FichiersWhereUniqueInput | FichiersWhereUniqueInput[]
    connect?: FichiersWhereUniqueInput | FichiersWhereUniqueInput[]
    update?: FichiersUpdateWithWhereUniqueWithoutConsultationsInput | FichiersUpdateWithWhereUniqueWithoutConsultationsInput[]
    updateMany?: FichiersUpdateManyWithWhereWithoutConsultationsInput | FichiersUpdateManyWithWhereWithoutConsultationsInput[]
    deleteMany?: FichiersScalarWhereInput | FichiersScalarWhereInput[]
  }

  export type ConsultationsCreateNestedOneWithoutFichiersInput = {
    create?: XOR<ConsultationsCreateWithoutFichiersInput, ConsultationsUncheckedCreateWithoutFichiersInput>
    connectOrCreate?: ConsultationsCreateOrConnectWithoutFichiersInput
    connect?: ConsultationsWhereUniqueInput
  }

  export type ConsultationsUpdateOneRequiredWithoutFichiersNestedInput = {
    create?: XOR<ConsultationsCreateWithoutFichiersInput, ConsultationsUncheckedCreateWithoutFichiersInput>
    connectOrCreate?: ConsultationsCreateOrConnectWithoutFichiersInput
    upsert?: ConsultationsUpsertWithoutFichiersInput
    connect?: ConsultationsWhereUniqueInput
    update?: XOR<XOR<ConsultationsUpdateToOneWithWhereWithoutFichiersInput, ConsultationsUpdateWithoutFichiersInput>, ConsultationsUncheckedUpdateWithoutFichiersInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedEnumSEXENullableFilter<$PrismaModel = never> = {
    equals?: $Enums.SEXE | EnumSEXEFieldRefInput<$PrismaModel> | null
    in?: $Enums.SEXE[] | ListEnumSEXEFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.SEXE[] | ListEnumSEXEFieldRefInput<$PrismaModel> | null
    not?: NestedEnumSEXENullableFilter<$PrismaModel> | $Enums.SEXE | null
  }

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumSEXENullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SEXE | EnumSEXEFieldRefInput<$PrismaModel> | null
    in?: $Enums.SEXE[] | ListEnumSEXEFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.SEXE[] | ListEnumSEXEFieldRefInput<$PrismaModel> | null
    not?: NestedEnumSEXENullableWithAggregatesFilter<$PrismaModel> | $Enums.SEXE | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumSEXENullableFilter<$PrismaModel>
    _max?: NestedEnumSEXENullableFilter<$PrismaModel>
  }

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedEnumStatusRvdFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusRvd | EnumStatusRvdFieldRefInput<$PrismaModel>
    in?: $Enums.StatusRvd[] | ListEnumStatusRvdFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusRvd[] | ListEnumStatusRvdFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusRvdFilter<$PrismaModel> | $Enums.StatusRvd
  }

  export type NestedEnumStatusRvdWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusRvd | EnumStatusRvdFieldRefInput<$PrismaModel>
    in?: $Enums.StatusRvd[] | ListEnumStatusRvdFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusRvd[] | ListEnumStatusRvdFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusRvdWithAggregatesFilter<$PrismaModel> | $Enums.StatusRvd
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusRvdFilter<$PrismaModel>
    _max?: NestedEnumStatusRvdFilter<$PrismaModel>
  }

  export type SessionCreateWithoutUserInput = {
    id: string
    expiresAt: Date | string
    token: string
    createdAt?: Date | string
    updatedAt?: Date | string
    ipAddress?: string | null
    userAgent?: string | null
    impersonatedBy?: string | null
  }

  export type SessionUncheckedCreateWithoutUserInput = {
    id: string
    expiresAt: Date | string
    token: string
    createdAt?: Date | string
    updatedAt?: Date | string
    ipAddress?: string | null
    userAgent?: string | null
    impersonatedBy?: string | null
  }

  export type SessionCreateOrConnectWithoutUserInput = {
    where: SessionWhereUniqueInput
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionCreateManyUserInputEnvelope = {
    data: SessionCreateManyUserInput | SessionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type AccountCreateWithoutUserInput = {
    id: string
    accountId: string
    providerId: string
    accessToken?: string | null
    refreshToken?: string | null
    idToken?: string | null
    accessTokenExpiresAt?: Date | string | null
    refreshTokenExpiresAt?: Date | string | null
    scope?: string | null
    password?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AccountUncheckedCreateWithoutUserInput = {
    id: string
    accountId: string
    providerId: string
    accessToken?: string | null
    refreshToken?: string | null
    idToken?: string | null
    accessTokenExpiresAt?: Date | string | null
    refreshTokenExpiresAt?: Date | string | null
    scope?: string | null
    password?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AccountCreateOrConnectWithoutUserInput = {
    where: AccountWhereUniqueInput
    create: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput>
  }

  export type AccountCreateManyUserInputEnvelope = {
    data: AccountCreateManyUserInput | AccountCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type SignalementsCreateWithoutUserInput = {
    id?: string
    sujet?: string | null
    message: string
    cree_le?: Date | string
    modifie_le?: Date | string
  }

  export type SignalementsUncheckedCreateWithoutUserInput = {
    id?: string
    sujet?: string | null
    message: string
    cree_le?: Date | string
    modifie_le?: Date | string
  }

  export type SignalementsCreateOrConnectWithoutUserInput = {
    where: SignalementsWhereUniqueInput
    create: XOR<SignalementsCreateWithoutUserInput, SignalementsUncheckedCreateWithoutUserInput>
  }

  export type SignalementsCreateManyUserInputEnvelope = {
    data: SignalementsCreateManyUserInput | SignalementsCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type PatientsCreateWithoutUserInput = {
    id_patient?: string
    cree_le?: Date | string
    modifie_le?: Date | string
    rendezVous?: RendezVousCreateNestedManyWithoutPatientsInput
    consultations?: ConsultationsCreateNestedManyWithoutPatientInput
  }

  export type PatientsUncheckedCreateWithoutUserInput = {
    id_patient?: string
    cree_le?: Date | string
    modifie_le?: Date | string
    rendezVous?: RendezVousUncheckedCreateNestedManyWithoutPatientsInput
    consultations?: ConsultationsUncheckedCreateNestedManyWithoutPatientInput
  }

  export type PatientsCreateOrConnectWithoutUserInput = {
    where: PatientsWhereUniqueInput
    create: XOR<PatientsCreateWithoutUserInput, PatientsUncheckedCreateWithoutUserInput>
  }

  export type PatientsCreateManyUserInputEnvelope = {
    data: PatientsCreateManyUserInput | PatientsCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type MedecinsCreateWithoutUserInput = {
    id_medecin?: string
    specialite: string
    description: string
    nombre_signalement?: number
    cree_le?: Date | string
    modifie_le?: Date | string
    rendezVous?: RendezVousCreateNestedManyWithoutMedecinsInput
    posts?: PostsCreateNestedManyWithoutMedecinsInput
    consultations?: ConsultationsCreateNestedManyWithoutMedecinInput
  }

  export type MedecinsUncheckedCreateWithoutUserInput = {
    id_medecin?: string
    specialite: string
    description: string
    nombre_signalement?: number
    cree_le?: Date | string
    modifie_le?: Date | string
    rendezVous?: RendezVousUncheckedCreateNestedManyWithoutMedecinsInput
    posts?: PostsUncheckedCreateNestedManyWithoutMedecinsInput
    consultations?: ConsultationsUncheckedCreateNestedManyWithoutMedecinInput
  }

  export type MedecinsCreateOrConnectWithoutUserInput = {
    where: MedecinsWhereUniqueInput
    create: XOR<MedecinsCreateWithoutUserInput, MedecinsUncheckedCreateWithoutUserInput>
  }

  export type MedecinsCreateManyUserInputEnvelope = {
    data: MedecinsCreateManyUserInput | MedecinsCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type SessionUpsertWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    update: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionUpdateWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    data: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
  }

  export type SessionUpdateManyWithWhereWithoutUserInput = {
    where: SessionScalarWhereInput
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyWithoutUserInput>
  }

  export type SessionScalarWhereInput = {
    AND?: SessionScalarWhereInput | SessionScalarWhereInput[]
    OR?: SessionScalarWhereInput[]
    NOT?: SessionScalarWhereInput | SessionScalarWhereInput[]
    id?: StringFilter<"Session"> | string
    expiresAt?: DateTimeFilter<"Session"> | Date | string
    token?: StringFilter<"Session"> | string
    createdAt?: DateTimeFilter<"Session"> | Date | string
    updatedAt?: DateTimeFilter<"Session"> | Date | string
    ipAddress?: StringNullableFilter<"Session"> | string | null
    userAgent?: StringNullableFilter<"Session"> | string | null
    userId?: StringFilter<"Session"> | string
    impersonatedBy?: StringNullableFilter<"Session"> | string | null
  }

  export type AccountUpsertWithWhereUniqueWithoutUserInput = {
    where: AccountWhereUniqueInput
    update: XOR<AccountUpdateWithoutUserInput, AccountUncheckedUpdateWithoutUserInput>
    create: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput>
  }

  export type AccountUpdateWithWhereUniqueWithoutUserInput = {
    where: AccountWhereUniqueInput
    data: XOR<AccountUpdateWithoutUserInput, AccountUncheckedUpdateWithoutUserInput>
  }

  export type AccountUpdateManyWithWhereWithoutUserInput = {
    where: AccountScalarWhereInput
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyWithoutUserInput>
  }

  export type AccountScalarWhereInput = {
    AND?: AccountScalarWhereInput | AccountScalarWhereInput[]
    OR?: AccountScalarWhereInput[]
    NOT?: AccountScalarWhereInput | AccountScalarWhereInput[]
    id?: StringFilter<"Account"> | string
    accountId?: StringFilter<"Account"> | string
    providerId?: StringFilter<"Account"> | string
    userId?: StringFilter<"Account"> | string
    accessToken?: StringNullableFilter<"Account"> | string | null
    refreshToken?: StringNullableFilter<"Account"> | string | null
    idToken?: StringNullableFilter<"Account"> | string | null
    accessTokenExpiresAt?: DateTimeNullableFilter<"Account"> | Date | string | null
    refreshTokenExpiresAt?: DateTimeNullableFilter<"Account"> | Date | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    password?: StringNullableFilter<"Account"> | string | null
    createdAt?: DateTimeFilter<"Account"> | Date | string
    updatedAt?: DateTimeFilter<"Account"> | Date | string
  }

  export type SignalementsUpsertWithWhereUniqueWithoutUserInput = {
    where: SignalementsWhereUniqueInput
    update: XOR<SignalementsUpdateWithoutUserInput, SignalementsUncheckedUpdateWithoutUserInput>
    create: XOR<SignalementsCreateWithoutUserInput, SignalementsUncheckedCreateWithoutUserInput>
  }

  export type SignalementsUpdateWithWhereUniqueWithoutUserInput = {
    where: SignalementsWhereUniqueInput
    data: XOR<SignalementsUpdateWithoutUserInput, SignalementsUncheckedUpdateWithoutUserInput>
  }

  export type SignalementsUpdateManyWithWhereWithoutUserInput = {
    where: SignalementsScalarWhereInput
    data: XOR<SignalementsUpdateManyMutationInput, SignalementsUncheckedUpdateManyWithoutUserInput>
  }

  export type SignalementsScalarWhereInput = {
    AND?: SignalementsScalarWhereInput | SignalementsScalarWhereInput[]
    OR?: SignalementsScalarWhereInput[]
    NOT?: SignalementsScalarWhereInput | SignalementsScalarWhereInput[]
    id?: StringFilter<"Signalements"> | string
    sujet?: StringNullableFilter<"Signalements"> | string | null
    message?: StringFilter<"Signalements"> | string
    cree_le?: DateTimeFilter<"Signalements"> | Date | string
    modifie_le?: DateTimeFilter<"Signalements"> | Date | string
    userId?: StringFilter<"Signalements"> | string
  }

  export type PatientsUpsertWithWhereUniqueWithoutUserInput = {
    where: PatientsWhereUniqueInput
    update: XOR<PatientsUpdateWithoutUserInput, PatientsUncheckedUpdateWithoutUserInput>
    create: XOR<PatientsCreateWithoutUserInput, PatientsUncheckedCreateWithoutUserInput>
  }

  export type PatientsUpdateWithWhereUniqueWithoutUserInput = {
    where: PatientsWhereUniqueInput
    data: XOR<PatientsUpdateWithoutUserInput, PatientsUncheckedUpdateWithoutUserInput>
  }

  export type PatientsUpdateManyWithWhereWithoutUserInput = {
    where: PatientsScalarWhereInput
    data: XOR<PatientsUpdateManyMutationInput, PatientsUncheckedUpdateManyWithoutUserInput>
  }

  export type PatientsScalarWhereInput = {
    AND?: PatientsScalarWhereInput | PatientsScalarWhereInput[]
    OR?: PatientsScalarWhereInput[]
    NOT?: PatientsScalarWhereInput | PatientsScalarWhereInput[]
    id_patient?: StringFilter<"Patients"> | string
    cree_le?: DateTimeFilter<"Patients"> | Date | string
    modifie_le?: DateTimeFilter<"Patients"> | Date | string
    userId?: StringFilter<"Patients"> | string
  }

  export type MedecinsUpsertWithWhereUniqueWithoutUserInput = {
    where: MedecinsWhereUniqueInput
    update: XOR<MedecinsUpdateWithoutUserInput, MedecinsUncheckedUpdateWithoutUserInput>
    create: XOR<MedecinsCreateWithoutUserInput, MedecinsUncheckedCreateWithoutUserInput>
  }

  export type MedecinsUpdateWithWhereUniqueWithoutUserInput = {
    where: MedecinsWhereUniqueInput
    data: XOR<MedecinsUpdateWithoutUserInput, MedecinsUncheckedUpdateWithoutUserInput>
  }

  export type MedecinsUpdateManyWithWhereWithoutUserInput = {
    where: MedecinsScalarWhereInput
    data: XOR<MedecinsUpdateManyMutationInput, MedecinsUncheckedUpdateManyWithoutUserInput>
  }

  export type MedecinsScalarWhereInput = {
    AND?: MedecinsScalarWhereInput | MedecinsScalarWhereInput[]
    OR?: MedecinsScalarWhereInput[]
    NOT?: MedecinsScalarWhereInput | MedecinsScalarWhereInput[]
    id_medecin?: StringFilter<"Medecins"> | string
    specialite?: StringFilter<"Medecins"> | string
    description?: StringFilter<"Medecins"> | string
    nombre_signalement?: IntFilter<"Medecins"> | number
    cree_le?: DateTimeFilter<"Medecins"> | Date | string
    modifie_le?: DateTimeFilter<"Medecins"> | Date | string
    userId?: StringFilter<"Medecins"> | string
  }

  export type UserCreateWithoutSessionsInput = {
    id: string
    createdAt?: Date | string
    email: string
    name?: string | null
    postnom?: string | null
    prenom?: string | null
    slug?: string | null
    numero_telephone?: string | null
    date_de_naissance?: Date | string | null
    adresse_residence?: string | null
    emailVerified?: boolean
    image?: string | null
    sexe?: $Enums.SEXE | null
    updatedAt?: Date | string
    is_active?: boolean
    role?: string | null
    banned?: boolean | null
    banReason?: string | null
    banExpires?: Date | string | null
    accounts?: AccountCreateNestedManyWithoutUserInput
    signalements?: SignalementsCreateNestedManyWithoutUserInput
    patient?: PatientsCreateNestedManyWithoutUserInput
    medecin?: MedecinsCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSessionsInput = {
    id: string
    createdAt?: Date | string
    email: string
    name?: string | null
    postnom?: string | null
    prenom?: string | null
    slug?: string | null
    numero_telephone?: string | null
    date_de_naissance?: Date | string | null
    adresse_residence?: string | null
    emailVerified?: boolean
    image?: string | null
    sexe?: $Enums.SEXE | null
    updatedAt?: Date | string
    is_active?: boolean
    role?: string | null
    banned?: boolean | null
    banReason?: string | null
    banExpires?: Date | string | null
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    signalements?: SignalementsUncheckedCreateNestedManyWithoutUserInput
    patient?: PatientsUncheckedCreateNestedManyWithoutUserInput
    medecin?: MedecinsUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSessionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
  }

  export type UserUpsertWithoutSessionsInput = {
    update: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSessionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type UserUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    postnom?: NullableStringFieldUpdateOperationsInput | string | null
    prenom?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    numero_telephone?: NullableStringFieldUpdateOperationsInput | string | null
    date_de_naissance?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    adresse_residence?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    sexe?: NullableEnumSEXEFieldUpdateOperationsInput | $Enums.SEXE | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    role?: NullableStringFieldUpdateOperationsInput | string | null
    banned?: NullableBoolFieldUpdateOperationsInput | boolean | null
    banReason?: NullableStringFieldUpdateOperationsInput | string | null
    banExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    accounts?: AccountUpdateManyWithoutUserNestedInput
    signalements?: SignalementsUpdateManyWithoutUserNestedInput
    patient?: PatientsUpdateManyWithoutUserNestedInput
    medecin?: MedecinsUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    postnom?: NullableStringFieldUpdateOperationsInput | string | null
    prenom?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    numero_telephone?: NullableStringFieldUpdateOperationsInput | string | null
    date_de_naissance?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    adresse_residence?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    sexe?: NullableEnumSEXEFieldUpdateOperationsInput | $Enums.SEXE | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    role?: NullableStringFieldUpdateOperationsInput | string | null
    banned?: NullableBoolFieldUpdateOperationsInput | boolean | null
    banReason?: NullableStringFieldUpdateOperationsInput | string | null
    banExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    signalements?: SignalementsUncheckedUpdateManyWithoutUserNestedInput
    patient?: PatientsUncheckedUpdateManyWithoutUserNestedInput
    medecin?: MedecinsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutAccountsInput = {
    id: string
    createdAt?: Date | string
    email: string
    name?: string | null
    postnom?: string | null
    prenom?: string | null
    slug?: string | null
    numero_telephone?: string | null
    date_de_naissance?: Date | string | null
    adresse_residence?: string | null
    emailVerified?: boolean
    image?: string | null
    sexe?: $Enums.SEXE | null
    updatedAt?: Date | string
    is_active?: boolean
    role?: string | null
    banned?: boolean | null
    banReason?: string | null
    banExpires?: Date | string | null
    sessions?: SessionCreateNestedManyWithoutUserInput
    signalements?: SignalementsCreateNestedManyWithoutUserInput
    patient?: PatientsCreateNestedManyWithoutUserInput
    medecin?: MedecinsCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAccountsInput = {
    id: string
    createdAt?: Date | string
    email: string
    name?: string | null
    postnom?: string | null
    prenom?: string | null
    slug?: string | null
    numero_telephone?: string | null
    date_de_naissance?: Date | string | null
    adresse_residence?: string | null
    emailVerified?: boolean
    image?: string | null
    sexe?: $Enums.SEXE | null
    updatedAt?: Date | string
    is_active?: boolean
    role?: string | null
    banned?: boolean | null
    banReason?: string | null
    banExpires?: Date | string | null
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    signalements?: SignalementsUncheckedCreateNestedManyWithoutUserInput
    patient?: PatientsUncheckedCreateNestedManyWithoutUserInput
    medecin?: MedecinsUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAccountsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
  }

  export type UserUpsertWithoutAccountsInput = {
    update: XOR<UserUpdateWithoutAccountsInput, UserUncheckedUpdateWithoutAccountsInput>
    create: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAccountsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAccountsInput, UserUncheckedUpdateWithoutAccountsInput>
  }

  export type UserUpdateWithoutAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    postnom?: NullableStringFieldUpdateOperationsInput | string | null
    prenom?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    numero_telephone?: NullableStringFieldUpdateOperationsInput | string | null
    date_de_naissance?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    adresse_residence?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    sexe?: NullableEnumSEXEFieldUpdateOperationsInput | $Enums.SEXE | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    role?: NullableStringFieldUpdateOperationsInput | string | null
    banned?: NullableBoolFieldUpdateOperationsInput | boolean | null
    banReason?: NullableStringFieldUpdateOperationsInput | string | null
    banExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sessions?: SessionUpdateManyWithoutUserNestedInput
    signalements?: SignalementsUpdateManyWithoutUserNestedInput
    patient?: PatientsUpdateManyWithoutUserNestedInput
    medecin?: MedecinsUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    postnom?: NullableStringFieldUpdateOperationsInput | string | null
    prenom?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    numero_telephone?: NullableStringFieldUpdateOperationsInput | string | null
    date_de_naissance?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    adresse_residence?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    sexe?: NullableEnumSEXEFieldUpdateOperationsInput | $Enums.SEXE | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    role?: NullableStringFieldUpdateOperationsInput | string | null
    banned?: NullableBoolFieldUpdateOperationsInput | boolean | null
    banReason?: NullableStringFieldUpdateOperationsInput | string | null
    banExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    signalements?: SignalementsUncheckedUpdateManyWithoutUserNestedInput
    patient?: PatientsUncheckedUpdateManyWithoutUserNestedInput
    medecin?: MedecinsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutSignalementsInput = {
    id: string
    createdAt?: Date | string
    email: string
    name?: string | null
    postnom?: string | null
    prenom?: string | null
    slug?: string | null
    numero_telephone?: string | null
    date_de_naissance?: Date | string | null
    adresse_residence?: string | null
    emailVerified?: boolean
    image?: string | null
    sexe?: $Enums.SEXE | null
    updatedAt?: Date | string
    is_active?: boolean
    role?: string | null
    banned?: boolean | null
    banReason?: string | null
    banExpires?: Date | string | null
    sessions?: SessionCreateNestedManyWithoutUserInput
    accounts?: AccountCreateNestedManyWithoutUserInput
    patient?: PatientsCreateNestedManyWithoutUserInput
    medecin?: MedecinsCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSignalementsInput = {
    id: string
    createdAt?: Date | string
    email: string
    name?: string | null
    postnom?: string | null
    prenom?: string | null
    slug?: string | null
    numero_telephone?: string | null
    date_de_naissance?: Date | string | null
    adresse_residence?: string | null
    emailVerified?: boolean
    image?: string | null
    sexe?: $Enums.SEXE | null
    updatedAt?: Date | string
    is_active?: boolean
    role?: string | null
    banned?: boolean | null
    banReason?: string | null
    banExpires?: Date | string | null
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    patient?: PatientsUncheckedCreateNestedManyWithoutUserInput
    medecin?: MedecinsUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSignalementsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSignalementsInput, UserUncheckedCreateWithoutSignalementsInput>
  }

  export type UserUpsertWithoutSignalementsInput = {
    update: XOR<UserUpdateWithoutSignalementsInput, UserUncheckedUpdateWithoutSignalementsInput>
    create: XOR<UserCreateWithoutSignalementsInput, UserUncheckedCreateWithoutSignalementsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSignalementsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSignalementsInput, UserUncheckedUpdateWithoutSignalementsInput>
  }

  export type UserUpdateWithoutSignalementsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    postnom?: NullableStringFieldUpdateOperationsInput | string | null
    prenom?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    numero_telephone?: NullableStringFieldUpdateOperationsInput | string | null
    date_de_naissance?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    adresse_residence?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    sexe?: NullableEnumSEXEFieldUpdateOperationsInput | $Enums.SEXE | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    role?: NullableStringFieldUpdateOperationsInput | string | null
    banned?: NullableBoolFieldUpdateOperationsInput | boolean | null
    banReason?: NullableStringFieldUpdateOperationsInput | string | null
    banExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sessions?: SessionUpdateManyWithoutUserNestedInput
    accounts?: AccountUpdateManyWithoutUserNestedInput
    patient?: PatientsUpdateManyWithoutUserNestedInput
    medecin?: MedecinsUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSignalementsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    postnom?: NullableStringFieldUpdateOperationsInput | string | null
    prenom?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    numero_telephone?: NullableStringFieldUpdateOperationsInput | string | null
    date_de_naissance?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    adresse_residence?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    sexe?: NullableEnumSEXEFieldUpdateOperationsInput | $Enums.SEXE | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    role?: NullableStringFieldUpdateOperationsInput | string | null
    banned?: NullableBoolFieldUpdateOperationsInput | boolean | null
    banReason?: NullableStringFieldUpdateOperationsInput | string | null
    banExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    patient?: PatientsUncheckedUpdateManyWithoutUserNestedInput
    medecin?: MedecinsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutPatientInput = {
    id: string
    createdAt?: Date | string
    email: string
    name?: string | null
    postnom?: string | null
    prenom?: string | null
    slug?: string | null
    numero_telephone?: string | null
    date_de_naissance?: Date | string | null
    adresse_residence?: string | null
    emailVerified?: boolean
    image?: string | null
    sexe?: $Enums.SEXE | null
    updatedAt?: Date | string
    is_active?: boolean
    role?: string | null
    banned?: boolean | null
    banReason?: string | null
    banExpires?: Date | string | null
    sessions?: SessionCreateNestedManyWithoutUserInput
    accounts?: AccountCreateNestedManyWithoutUserInput
    signalements?: SignalementsCreateNestedManyWithoutUserInput
    medecin?: MedecinsCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutPatientInput = {
    id: string
    createdAt?: Date | string
    email: string
    name?: string | null
    postnom?: string | null
    prenom?: string | null
    slug?: string | null
    numero_telephone?: string | null
    date_de_naissance?: Date | string | null
    adresse_residence?: string | null
    emailVerified?: boolean
    image?: string | null
    sexe?: $Enums.SEXE | null
    updatedAt?: Date | string
    is_active?: boolean
    role?: string | null
    banned?: boolean | null
    banReason?: string | null
    banExpires?: Date | string | null
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    signalements?: SignalementsUncheckedCreateNestedManyWithoutUserInput
    medecin?: MedecinsUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutPatientInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPatientInput, UserUncheckedCreateWithoutPatientInput>
  }

  export type RendezVousCreateWithoutPatientsInput = {
    id_rdv?: string
    motif: string
    cree_le?: Date | string
    status?: $Enums.StatusRvd
    modifie_le?: Date | string
    medecins: MedecinsCreateNestedOneWithoutRendezVousInput
  }

  export type RendezVousUncheckedCreateWithoutPatientsInput = {
    id_rdv?: string
    motif: string
    cree_le?: Date | string
    status?: $Enums.StatusRvd
    modifie_le?: Date | string
    id_medecin: string
  }

  export type RendezVousCreateOrConnectWithoutPatientsInput = {
    where: RendezVousWhereUniqueInput
    create: XOR<RendezVousCreateWithoutPatientsInput, RendezVousUncheckedCreateWithoutPatientsInput>
  }

  export type RendezVousCreateManyPatientsInputEnvelope = {
    data: RendezVousCreateManyPatientsInput | RendezVousCreateManyPatientsInput[]
    skipDuplicates?: boolean
  }

  export type ConsultationsCreateWithoutPatientInput = {
    id_consultation?: string
    diagnostique: string
    cree_le?: Date | string
    modifie_le?: Date | string
    medecin: MedecinsCreateNestedOneWithoutConsultationsInput
    fichiers?: FichiersCreateNestedManyWithoutConsultationsInput
  }

  export type ConsultationsUncheckedCreateWithoutPatientInput = {
    id_consultation?: string
    diagnostique: string
    cree_le?: Date | string
    modifie_le?: Date | string
    id_medecin: string
    fichiers?: FichiersUncheckedCreateNestedManyWithoutConsultationsInput
  }

  export type ConsultationsCreateOrConnectWithoutPatientInput = {
    where: ConsultationsWhereUniqueInput
    create: XOR<ConsultationsCreateWithoutPatientInput, ConsultationsUncheckedCreateWithoutPatientInput>
  }

  export type ConsultationsCreateManyPatientInputEnvelope = {
    data: ConsultationsCreateManyPatientInput | ConsultationsCreateManyPatientInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutPatientInput = {
    update: XOR<UserUpdateWithoutPatientInput, UserUncheckedUpdateWithoutPatientInput>
    create: XOR<UserCreateWithoutPatientInput, UserUncheckedCreateWithoutPatientInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPatientInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPatientInput, UserUncheckedUpdateWithoutPatientInput>
  }

  export type UserUpdateWithoutPatientInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    postnom?: NullableStringFieldUpdateOperationsInput | string | null
    prenom?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    numero_telephone?: NullableStringFieldUpdateOperationsInput | string | null
    date_de_naissance?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    adresse_residence?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    sexe?: NullableEnumSEXEFieldUpdateOperationsInput | $Enums.SEXE | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    role?: NullableStringFieldUpdateOperationsInput | string | null
    banned?: NullableBoolFieldUpdateOperationsInput | boolean | null
    banReason?: NullableStringFieldUpdateOperationsInput | string | null
    banExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sessions?: SessionUpdateManyWithoutUserNestedInput
    accounts?: AccountUpdateManyWithoutUserNestedInput
    signalements?: SignalementsUpdateManyWithoutUserNestedInput
    medecin?: MedecinsUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutPatientInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    postnom?: NullableStringFieldUpdateOperationsInput | string | null
    prenom?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    numero_telephone?: NullableStringFieldUpdateOperationsInput | string | null
    date_de_naissance?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    adresse_residence?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    sexe?: NullableEnumSEXEFieldUpdateOperationsInput | $Enums.SEXE | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    role?: NullableStringFieldUpdateOperationsInput | string | null
    banned?: NullableBoolFieldUpdateOperationsInput | boolean | null
    banReason?: NullableStringFieldUpdateOperationsInput | string | null
    banExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    signalements?: SignalementsUncheckedUpdateManyWithoutUserNestedInput
    medecin?: MedecinsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type RendezVousUpsertWithWhereUniqueWithoutPatientsInput = {
    where: RendezVousWhereUniqueInput
    update: XOR<RendezVousUpdateWithoutPatientsInput, RendezVousUncheckedUpdateWithoutPatientsInput>
    create: XOR<RendezVousCreateWithoutPatientsInput, RendezVousUncheckedCreateWithoutPatientsInput>
  }

  export type RendezVousUpdateWithWhereUniqueWithoutPatientsInput = {
    where: RendezVousWhereUniqueInput
    data: XOR<RendezVousUpdateWithoutPatientsInput, RendezVousUncheckedUpdateWithoutPatientsInput>
  }

  export type RendezVousUpdateManyWithWhereWithoutPatientsInput = {
    where: RendezVousScalarWhereInput
    data: XOR<RendezVousUpdateManyMutationInput, RendezVousUncheckedUpdateManyWithoutPatientsInput>
  }

  export type RendezVousScalarWhereInput = {
    AND?: RendezVousScalarWhereInput | RendezVousScalarWhereInput[]
    OR?: RendezVousScalarWhereInput[]
    NOT?: RendezVousScalarWhereInput | RendezVousScalarWhereInput[]
    id_rdv?: StringFilter<"RendezVous"> | string
    motif?: StringFilter<"RendezVous"> | string
    cree_le?: DateTimeFilter<"RendezVous"> | Date | string
    status?: EnumStatusRvdFilter<"RendezVous"> | $Enums.StatusRvd
    modifie_le?: DateTimeFilter<"RendezVous"> | Date | string
    id_patient?: StringFilter<"RendezVous"> | string
    id_medecin?: StringFilter<"RendezVous"> | string
  }

  export type ConsultationsUpsertWithWhereUniqueWithoutPatientInput = {
    where: ConsultationsWhereUniqueInput
    update: XOR<ConsultationsUpdateWithoutPatientInput, ConsultationsUncheckedUpdateWithoutPatientInput>
    create: XOR<ConsultationsCreateWithoutPatientInput, ConsultationsUncheckedCreateWithoutPatientInput>
  }

  export type ConsultationsUpdateWithWhereUniqueWithoutPatientInput = {
    where: ConsultationsWhereUniqueInput
    data: XOR<ConsultationsUpdateWithoutPatientInput, ConsultationsUncheckedUpdateWithoutPatientInput>
  }

  export type ConsultationsUpdateManyWithWhereWithoutPatientInput = {
    where: ConsultationsScalarWhereInput
    data: XOR<ConsultationsUpdateManyMutationInput, ConsultationsUncheckedUpdateManyWithoutPatientInput>
  }

  export type ConsultationsScalarWhereInput = {
    AND?: ConsultationsScalarWhereInput | ConsultationsScalarWhereInput[]
    OR?: ConsultationsScalarWhereInput[]
    NOT?: ConsultationsScalarWhereInput | ConsultationsScalarWhereInput[]
    id_consultation?: StringFilter<"Consultations"> | string
    diagnostique?: StringFilter<"Consultations"> | string
    cree_le?: DateTimeFilter<"Consultations"> | Date | string
    modifie_le?: DateTimeFilter<"Consultations"> | Date | string
    id_patient?: StringFilter<"Consultations"> | string
    id_medecin?: StringFilter<"Consultations"> | string
  }

  export type UserCreateWithoutMedecinInput = {
    id: string
    createdAt?: Date | string
    email: string
    name?: string | null
    postnom?: string | null
    prenom?: string | null
    slug?: string | null
    numero_telephone?: string | null
    date_de_naissance?: Date | string | null
    adresse_residence?: string | null
    emailVerified?: boolean
    image?: string | null
    sexe?: $Enums.SEXE | null
    updatedAt?: Date | string
    is_active?: boolean
    role?: string | null
    banned?: boolean | null
    banReason?: string | null
    banExpires?: Date | string | null
    sessions?: SessionCreateNestedManyWithoutUserInput
    accounts?: AccountCreateNestedManyWithoutUserInput
    signalements?: SignalementsCreateNestedManyWithoutUserInput
    patient?: PatientsCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutMedecinInput = {
    id: string
    createdAt?: Date | string
    email: string
    name?: string | null
    postnom?: string | null
    prenom?: string | null
    slug?: string | null
    numero_telephone?: string | null
    date_de_naissance?: Date | string | null
    adresse_residence?: string | null
    emailVerified?: boolean
    image?: string | null
    sexe?: $Enums.SEXE | null
    updatedAt?: Date | string
    is_active?: boolean
    role?: string | null
    banned?: boolean | null
    banReason?: string | null
    banExpires?: Date | string | null
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    signalements?: SignalementsUncheckedCreateNestedManyWithoutUserInput
    patient?: PatientsUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutMedecinInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutMedecinInput, UserUncheckedCreateWithoutMedecinInput>
  }

  export type RendezVousCreateWithoutMedecinsInput = {
    id_rdv?: string
    motif: string
    cree_le?: Date | string
    status?: $Enums.StatusRvd
    modifie_le?: Date | string
    patients: PatientsCreateNestedOneWithoutRendezVousInput
  }

  export type RendezVousUncheckedCreateWithoutMedecinsInput = {
    id_rdv?: string
    motif: string
    cree_le?: Date | string
    status?: $Enums.StatusRvd
    modifie_le?: Date | string
    id_patient: string
  }

  export type RendezVousCreateOrConnectWithoutMedecinsInput = {
    where: RendezVousWhereUniqueInput
    create: XOR<RendezVousCreateWithoutMedecinsInput, RendezVousUncheckedCreateWithoutMedecinsInput>
  }

  export type RendezVousCreateManyMedecinsInputEnvelope = {
    data: RendezVousCreateManyMedecinsInput | RendezVousCreateManyMedecinsInput[]
    skipDuplicates?: boolean
  }

  export type PostsCreateWithoutMedecinsInput = {
    id_post?: string
    slug: string
    titre: string
    description: string
    lien_image?: string | null
    star?: number
    nombre_aime?: number
    nombre_non_aime?: number
    nombre_vue?: number
    cree_le?: Date | string
    modifie_le?: Date | string
    commentaires?: CommentairesCreateNestedManyWithoutPostsInput
  }

  export type PostsUncheckedCreateWithoutMedecinsInput = {
    id_post?: string
    slug: string
    titre: string
    description: string
    lien_image?: string | null
    star?: number
    nombre_aime?: number
    nombre_non_aime?: number
    nombre_vue?: number
    cree_le?: Date | string
    modifie_le?: Date | string
    commentaires?: CommentairesUncheckedCreateNestedManyWithoutPostsInput
  }

  export type PostsCreateOrConnectWithoutMedecinsInput = {
    where: PostsWhereUniqueInput
    create: XOR<PostsCreateWithoutMedecinsInput, PostsUncheckedCreateWithoutMedecinsInput>
  }

  export type PostsCreateManyMedecinsInputEnvelope = {
    data: PostsCreateManyMedecinsInput | PostsCreateManyMedecinsInput[]
    skipDuplicates?: boolean
  }

  export type ConsultationsCreateWithoutMedecinInput = {
    id_consultation?: string
    diagnostique: string
    cree_le?: Date | string
    modifie_le?: Date | string
    patient: PatientsCreateNestedOneWithoutConsultationsInput
    fichiers?: FichiersCreateNestedManyWithoutConsultationsInput
  }

  export type ConsultationsUncheckedCreateWithoutMedecinInput = {
    id_consultation?: string
    diagnostique: string
    cree_le?: Date | string
    modifie_le?: Date | string
    id_patient: string
    fichiers?: FichiersUncheckedCreateNestedManyWithoutConsultationsInput
  }

  export type ConsultationsCreateOrConnectWithoutMedecinInput = {
    where: ConsultationsWhereUniqueInput
    create: XOR<ConsultationsCreateWithoutMedecinInput, ConsultationsUncheckedCreateWithoutMedecinInput>
  }

  export type ConsultationsCreateManyMedecinInputEnvelope = {
    data: ConsultationsCreateManyMedecinInput | ConsultationsCreateManyMedecinInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutMedecinInput = {
    update: XOR<UserUpdateWithoutMedecinInput, UserUncheckedUpdateWithoutMedecinInput>
    create: XOR<UserCreateWithoutMedecinInput, UserUncheckedCreateWithoutMedecinInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutMedecinInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutMedecinInput, UserUncheckedUpdateWithoutMedecinInput>
  }

  export type UserUpdateWithoutMedecinInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    postnom?: NullableStringFieldUpdateOperationsInput | string | null
    prenom?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    numero_telephone?: NullableStringFieldUpdateOperationsInput | string | null
    date_de_naissance?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    adresse_residence?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    sexe?: NullableEnumSEXEFieldUpdateOperationsInput | $Enums.SEXE | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    role?: NullableStringFieldUpdateOperationsInput | string | null
    banned?: NullableBoolFieldUpdateOperationsInput | boolean | null
    banReason?: NullableStringFieldUpdateOperationsInput | string | null
    banExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sessions?: SessionUpdateManyWithoutUserNestedInput
    accounts?: AccountUpdateManyWithoutUserNestedInput
    signalements?: SignalementsUpdateManyWithoutUserNestedInput
    patient?: PatientsUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutMedecinInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    postnom?: NullableStringFieldUpdateOperationsInput | string | null
    prenom?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    numero_telephone?: NullableStringFieldUpdateOperationsInput | string | null
    date_de_naissance?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    adresse_residence?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    sexe?: NullableEnumSEXEFieldUpdateOperationsInput | $Enums.SEXE | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    role?: NullableStringFieldUpdateOperationsInput | string | null
    banned?: NullableBoolFieldUpdateOperationsInput | boolean | null
    banReason?: NullableStringFieldUpdateOperationsInput | string | null
    banExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    signalements?: SignalementsUncheckedUpdateManyWithoutUserNestedInput
    patient?: PatientsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type RendezVousUpsertWithWhereUniqueWithoutMedecinsInput = {
    where: RendezVousWhereUniqueInput
    update: XOR<RendezVousUpdateWithoutMedecinsInput, RendezVousUncheckedUpdateWithoutMedecinsInput>
    create: XOR<RendezVousCreateWithoutMedecinsInput, RendezVousUncheckedCreateWithoutMedecinsInput>
  }

  export type RendezVousUpdateWithWhereUniqueWithoutMedecinsInput = {
    where: RendezVousWhereUniqueInput
    data: XOR<RendezVousUpdateWithoutMedecinsInput, RendezVousUncheckedUpdateWithoutMedecinsInput>
  }

  export type RendezVousUpdateManyWithWhereWithoutMedecinsInput = {
    where: RendezVousScalarWhereInput
    data: XOR<RendezVousUpdateManyMutationInput, RendezVousUncheckedUpdateManyWithoutMedecinsInput>
  }

  export type PostsUpsertWithWhereUniqueWithoutMedecinsInput = {
    where: PostsWhereUniqueInput
    update: XOR<PostsUpdateWithoutMedecinsInput, PostsUncheckedUpdateWithoutMedecinsInput>
    create: XOR<PostsCreateWithoutMedecinsInput, PostsUncheckedCreateWithoutMedecinsInput>
  }

  export type PostsUpdateWithWhereUniqueWithoutMedecinsInput = {
    where: PostsWhereUniqueInput
    data: XOR<PostsUpdateWithoutMedecinsInput, PostsUncheckedUpdateWithoutMedecinsInput>
  }

  export type PostsUpdateManyWithWhereWithoutMedecinsInput = {
    where: PostsScalarWhereInput
    data: XOR<PostsUpdateManyMutationInput, PostsUncheckedUpdateManyWithoutMedecinsInput>
  }

  export type PostsScalarWhereInput = {
    AND?: PostsScalarWhereInput | PostsScalarWhereInput[]
    OR?: PostsScalarWhereInput[]
    NOT?: PostsScalarWhereInput | PostsScalarWhereInput[]
    id_post?: StringFilter<"Posts"> | string
    slug?: StringFilter<"Posts"> | string
    titre?: StringFilter<"Posts"> | string
    description?: StringFilter<"Posts"> | string
    lien_image?: StringNullableFilter<"Posts"> | string | null
    star?: IntFilter<"Posts"> | number
    nombre_aime?: IntFilter<"Posts"> | number
    nombre_non_aime?: IntFilter<"Posts"> | number
    nombre_vue?: IntFilter<"Posts"> | number
    cree_le?: DateTimeFilter<"Posts"> | Date | string
    modifie_le?: DateTimeFilter<"Posts"> | Date | string
    id_medecin?: StringFilter<"Posts"> | string
  }

  export type ConsultationsUpsertWithWhereUniqueWithoutMedecinInput = {
    where: ConsultationsWhereUniqueInput
    update: XOR<ConsultationsUpdateWithoutMedecinInput, ConsultationsUncheckedUpdateWithoutMedecinInput>
    create: XOR<ConsultationsCreateWithoutMedecinInput, ConsultationsUncheckedCreateWithoutMedecinInput>
  }

  export type ConsultationsUpdateWithWhereUniqueWithoutMedecinInput = {
    where: ConsultationsWhereUniqueInput
    data: XOR<ConsultationsUpdateWithoutMedecinInput, ConsultationsUncheckedUpdateWithoutMedecinInput>
  }

  export type ConsultationsUpdateManyWithWhereWithoutMedecinInput = {
    where: ConsultationsScalarWhereInput
    data: XOR<ConsultationsUpdateManyMutationInput, ConsultationsUncheckedUpdateManyWithoutMedecinInput>
  }

  export type PatientsCreateWithoutRendezVousInput = {
    id_patient?: string
    cree_le?: Date | string
    modifie_le?: Date | string
    user: UserCreateNestedOneWithoutPatientInput
    consultations?: ConsultationsCreateNestedManyWithoutPatientInput
  }

  export type PatientsUncheckedCreateWithoutRendezVousInput = {
    id_patient?: string
    cree_le?: Date | string
    modifie_le?: Date | string
    userId: string
    consultations?: ConsultationsUncheckedCreateNestedManyWithoutPatientInput
  }

  export type PatientsCreateOrConnectWithoutRendezVousInput = {
    where: PatientsWhereUniqueInput
    create: XOR<PatientsCreateWithoutRendezVousInput, PatientsUncheckedCreateWithoutRendezVousInput>
  }

  export type MedecinsCreateWithoutRendezVousInput = {
    id_medecin?: string
    specialite: string
    description: string
    nombre_signalement?: number
    cree_le?: Date | string
    modifie_le?: Date | string
    user: UserCreateNestedOneWithoutMedecinInput
    posts?: PostsCreateNestedManyWithoutMedecinsInput
    consultations?: ConsultationsCreateNestedManyWithoutMedecinInput
  }

  export type MedecinsUncheckedCreateWithoutRendezVousInput = {
    id_medecin?: string
    specialite: string
    description: string
    nombre_signalement?: number
    cree_le?: Date | string
    modifie_le?: Date | string
    userId: string
    posts?: PostsUncheckedCreateNestedManyWithoutMedecinsInput
    consultations?: ConsultationsUncheckedCreateNestedManyWithoutMedecinInput
  }

  export type MedecinsCreateOrConnectWithoutRendezVousInput = {
    where: MedecinsWhereUniqueInput
    create: XOR<MedecinsCreateWithoutRendezVousInput, MedecinsUncheckedCreateWithoutRendezVousInput>
  }

  export type PatientsUpsertWithoutRendezVousInput = {
    update: XOR<PatientsUpdateWithoutRendezVousInput, PatientsUncheckedUpdateWithoutRendezVousInput>
    create: XOR<PatientsCreateWithoutRendezVousInput, PatientsUncheckedCreateWithoutRendezVousInput>
    where?: PatientsWhereInput
  }

  export type PatientsUpdateToOneWithWhereWithoutRendezVousInput = {
    where?: PatientsWhereInput
    data: XOR<PatientsUpdateWithoutRendezVousInput, PatientsUncheckedUpdateWithoutRendezVousInput>
  }

  export type PatientsUpdateWithoutRendezVousInput = {
    id_patient?: StringFieldUpdateOperationsInput | string
    cree_le?: DateTimeFieldUpdateOperationsInput | Date | string
    modifie_le?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutPatientNestedInput
    consultations?: ConsultationsUpdateManyWithoutPatientNestedInput
  }

  export type PatientsUncheckedUpdateWithoutRendezVousInput = {
    id_patient?: StringFieldUpdateOperationsInput | string
    cree_le?: DateTimeFieldUpdateOperationsInput | Date | string
    modifie_le?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    consultations?: ConsultationsUncheckedUpdateManyWithoutPatientNestedInput
  }

  export type MedecinsUpsertWithoutRendezVousInput = {
    update: XOR<MedecinsUpdateWithoutRendezVousInput, MedecinsUncheckedUpdateWithoutRendezVousInput>
    create: XOR<MedecinsCreateWithoutRendezVousInput, MedecinsUncheckedCreateWithoutRendezVousInput>
    where?: MedecinsWhereInput
  }

  export type MedecinsUpdateToOneWithWhereWithoutRendezVousInput = {
    where?: MedecinsWhereInput
    data: XOR<MedecinsUpdateWithoutRendezVousInput, MedecinsUncheckedUpdateWithoutRendezVousInput>
  }

  export type MedecinsUpdateWithoutRendezVousInput = {
    id_medecin?: StringFieldUpdateOperationsInput | string
    specialite?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    nombre_signalement?: IntFieldUpdateOperationsInput | number
    cree_le?: DateTimeFieldUpdateOperationsInput | Date | string
    modifie_le?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutMedecinNestedInput
    posts?: PostsUpdateManyWithoutMedecinsNestedInput
    consultations?: ConsultationsUpdateManyWithoutMedecinNestedInput
  }

  export type MedecinsUncheckedUpdateWithoutRendezVousInput = {
    id_medecin?: StringFieldUpdateOperationsInput | string
    specialite?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    nombre_signalement?: IntFieldUpdateOperationsInput | number
    cree_le?: DateTimeFieldUpdateOperationsInput | Date | string
    modifie_le?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    posts?: PostsUncheckedUpdateManyWithoutMedecinsNestedInput
    consultations?: ConsultationsUncheckedUpdateManyWithoutMedecinNestedInput
  }

  export type MedecinsCreateWithoutPostsInput = {
    id_medecin?: string
    specialite: string
    description: string
    nombre_signalement?: number
    cree_le?: Date | string
    modifie_le?: Date | string
    user: UserCreateNestedOneWithoutMedecinInput
    rendezVous?: RendezVousCreateNestedManyWithoutMedecinsInput
    consultations?: ConsultationsCreateNestedManyWithoutMedecinInput
  }

  export type MedecinsUncheckedCreateWithoutPostsInput = {
    id_medecin?: string
    specialite: string
    description: string
    nombre_signalement?: number
    cree_le?: Date | string
    modifie_le?: Date | string
    userId: string
    rendezVous?: RendezVousUncheckedCreateNestedManyWithoutMedecinsInput
    consultations?: ConsultationsUncheckedCreateNestedManyWithoutMedecinInput
  }

  export type MedecinsCreateOrConnectWithoutPostsInput = {
    where: MedecinsWhereUniqueInput
    create: XOR<MedecinsCreateWithoutPostsInput, MedecinsUncheckedCreateWithoutPostsInput>
  }

  export type CommentairesCreateWithoutPostsInput = {
    id_commentaire?: string
    commentaire: string
    cree_le?: Date | string
    modifie_le?: Date | string
  }

  export type CommentairesUncheckedCreateWithoutPostsInput = {
    id_commentaire?: string
    commentaire: string
    cree_le?: Date | string
    modifie_le?: Date | string
  }

  export type CommentairesCreateOrConnectWithoutPostsInput = {
    where: CommentairesWhereUniqueInput
    create: XOR<CommentairesCreateWithoutPostsInput, CommentairesUncheckedCreateWithoutPostsInput>
  }

  export type CommentairesCreateManyPostsInputEnvelope = {
    data: CommentairesCreateManyPostsInput | CommentairesCreateManyPostsInput[]
    skipDuplicates?: boolean
  }

  export type MedecinsUpsertWithoutPostsInput = {
    update: XOR<MedecinsUpdateWithoutPostsInput, MedecinsUncheckedUpdateWithoutPostsInput>
    create: XOR<MedecinsCreateWithoutPostsInput, MedecinsUncheckedCreateWithoutPostsInput>
    where?: MedecinsWhereInput
  }

  export type MedecinsUpdateToOneWithWhereWithoutPostsInput = {
    where?: MedecinsWhereInput
    data: XOR<MedecinsUpdateWithoutPostsInput, MedecinsUncheckedUpdateWithoutPostsInput>
  }

  export type MedecinsUpdateWithoutPostsInput = {
    id_medecin?: StringFieldUpdateOperationsInput | string
    specialite?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    nombre_signalement?: IntFieldUpdateOperationsInput | number
    cree_le?: DateTimeFieldUpdateOperationsInput | Date | string
    modifie_le?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutMedecinNestedInput
    rendezVous?: RendezVousUpdateManyWithoutMedecinsNestedInput
    consultations?: ConsultationsUpdateManyWithoutMedecinNestedInput
  }

  export type MedecinsUncheckedUpdateWithoutPostsInput = {
    id_medecin?: StringFieldUpdateOperationsInput | string
    specialite?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    nombre_signalement?: IntFieldUpdateOperationsInput | number
    cree_le?: DateTimeFieldUpdateOperationsInput | Date | string
    modifie_le?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    rendezVous?: RendezVousUncheckedUpdateManyWithoutMedecinsNestedInput
    consultations?: ConsultationsUncheckedUpdateManyWithoutMedecinNestedInput
  }

  export type CommentairesUpsertWithWhereUniqueWithoutPostsInput = {
    where: CommentairesWhereUniqueInput
    update: XOR<CommentairesUpdateWithoutPostsInput, CommentairesUncheckedUpdateWithoutPostsInput>
    create: XOR<CommentairesCreateWithoutPostsInput, CommentairesUncheckedCreateWithoutPostsInput>
  }

  export type CommentairesUpdateWithWhereUniqueWithoutPostsInput = {
    where: CommentairesWhereUniqueInput
    data: XOR<CommentairesUpdateWithoutPostsInput, CommentairesUncheckedUpdateWithoutPostsInput>
  }

  export type CommentairesUpdateManyWithWhereWithoutPostsInput = {
    where: CommentairesScalarWhereInput
    data: XOR<CommentairesUpdateManyMutationInput, CommentairesUncheckedUpdateManyWithoutPostsInput>
  }

  export type CommentairesScalarWhereInput = {
    AND?: CommentairesScalarWhereInput | CommentairesScalarWhereInput[]
    OR?: CommentairesScalarWhereInput[]
    NOT?: CommentairesScalarWhereInput | CommentairesScalarWhereInput[]
    id_commentaire?: StringFilter<"Commentaires"> | string
    commentaire?: StringFilter<"Commentaires"> | string
    cree_le?: DateTimeFilter<"Commentaires"> | Date | string
    modifie_le?: DateTimeFilter<"Commentaires"> | Date | string
    id_post?: StringFilter<"Commentaires"> | string
  }

  export type PostsCreateWithoutCommentairesInput = {
    id_post?: string
    slug: string
    titre: string
    description: string
    lien_image?: string | null
    star?: number
    nombre_aime?: number
    nombre_non_aime?: number
    nombre_vue?: number
    cree_le?: Date | string
    modifie_le?: Date | string
    medecins: MedecinsCreateNestedOneWithoutPostsInput
  }

  export type PostsUncheckedCreateWithoutCommentairesInput = {
    id_post?: string
    slug: string
    titre: string
    description: string
    lien_image?: string | null
    star?: number
    nombre_aime?: number
    nombre_non_aime?: number
    nombre_vue?: number
    cree_le?: Date | string
    modifie_le?: Date | string
    id_medecin: string
  }

  export type PostsCreateOrConnectWithoutCommentairesInput = {
    where: PostsWhereUniqueInput
    create: XOR<PostsCreateWithoutCommentairesInput, PostsUncheckedCreateWithoutCommentairesInput>
  }

  export type PostsUpsertWithoutCommentairesInput = {
    update: XOR<PostsUpdateWithoutCommentairesInput, PostsUncheckedUpdateWithoutCommentairesInput>
    create: XOR<PostsCreateWithoutCommentairesInput, PostsUncheckedCreateWithoutCommentairesInput>
    where?: PostsWhereInput
  }

  export type PostsUpdateToOneWithWhereWithoutCommentairesInput = {
    where?: PostsWhereInput
    data: XOR<PostsUpdateWithoutCommentairesInput, PostsUncheckedUpdateWithoutCommentairesInput>
  }

  export type PostsUpdateWithoutCommentairesInput = {
    id_post?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    titre?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    lien_image?: NullableStringFieldUpdateOperationsInput | string | null
    star?: IntFieldUpdateOperationsInput | number
    nombre_aime?: IntFieldUpdateOperationsInput | number
    nombre_non_aime?: IntFieldUpdateOperationsInput | number
    nombre_vue?: IntFieldUpdateOperationsInput | number
    cree_le?: DateTimeFieldUpdateOperationsInput | Date | string
    modifie_le?: DateTimeFieldUpdateOperationsInput | Date | string
    medecins?: MedecinsUpdateOneRequiredWithoutPostsNestedInput
  }

  export type PostsUncheckedUpdateWithoutCommentairesInput = {
    id_post?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    titre?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    lien_image?: NullableStringFieldUpdateOperationsInput | string | null
    star?: IntFieldUpdateOperationsInput | number
    nombre_aime?: IntFieldUpdateOperationsInput | number
    nombre_non_aime?: IntFieldUpdateOperationsInput | number
    nombre_vue?: IntFieldUpdateOperationsInput | number
    cree_le?: DateTimeFieldUpdateOperationsInput | Date | string
    modifie_le?: DateTimeFieldUpdateOperationsInput | Date | string
    id_medecin?: StringFieldUpdateOperationsInput | string
  }

  export type PatientsCreateWithoutConsultationsInput = {
    id_patient?: string
    cree_le?: Date | string
    modifie_le?: Date | string
    user: UserCreateNestedOneWithoutPatientInput
    rendezVous?: RendezVousCreateNestedManyWithoutPatientsInput
  }

  export type PatientsUncheckedCreateWithoutConsultationsInput = {
    id_patient?: string
    cree_le?: Date | string
    modifie_le?: Date | string
    userId: string
    rendezVous?: RendezVousUncheckedCreateNestedManyWithoutPatientsInput
  }

  export type PatientsCreateOrConnectWithoutConsultationsInput = {
    where: PatientsWhereUniqueInput
    create: XOR<PatientsCreateWithoutConsultationsInput, PatientsUncheckedCreateWithoutConsultationsInput>
  }

  export type MedecinsCreateWithoutConsultationsInput = {
    id_medecin?: string
    specialite: string
    description: string
    nombre_signalement?: number
    cree_le?: Date | string
    modifie_le?: Date | string
    user: UserCreateNestedOneWithoutMedecinInput
    rendezVous?: RendezVousCreateNestedManyWithoutMedecinsInput
    posts?: PostsCreateNestedManyWithoutMedecinsInput
  }

  export type MedecinsUncheckedCreateWithoutConsultationsInput = {
    id_medecin?: string
    specialite: string
    description: string
    nombre_signalement?: number
    cree_le?: Date | string
    modifie_le?: Date | string
    userId: string
    rendezVous?: RendezVousUncheckedCreateNestedManyWithoutMedecinsInput
    posts?: PostsUncheckedCreateNestedManyWithoutMedecinsInput
  }

  export type MedecinsCreateOrConnectWithoutConsultationsInput = {
    where: MedecinsWhereUniqueInput
    create: XOR<MedecinsCreateWithoutConsultationsInput, MedecinsUncheckedCreateWithoutConsultationsInput>
  }

  export type FichiersCreateWithoutConsultationsInput = {
    id_fichier?: string
    lien_fichier: string
    cree_le?: Date | string
    modifie_le?: Date | string
  }

  export type FichiersUncheckedCreateWithoutConsultationsInput = {
    id_fichier?: string
    lien_fichier: string
    cree_le?: Date | string
    modifie_le?: Date | string
  }

  export type FichiersCreateOrConnectWithoutConsultationsInput = {
    where: FichiersWhereUniqueInput
    create: XOR<FichiersCreateWithoutConsultationsInput, FichiersUncheckedCreateWithoutConsultationsInput>
  }

  export type FichiersCreateManyConsultationsInputEnvelope = {
    data: FichiersCreateManyConsultationsInput | FichiersCreateManyConsultationsInput[]
    skipDuplicates?: boolean
  }

  export type PatientsUpsertWithoutConsultationsInput = {
    update: XOR<PatientsUpdateWithoutConsultationsInput, PatientsUncheckedUpdateWithoutConsultationsInput>
    create: XOR<PatientsCreateWithoutConsultationsInput, PatientsUncheckedCreateWithoutConsultationsInput>
    where?: PatientsWhereInput
  }

  export type PatientsUpdateToOneWithWhereWithoutConsultationsInput = {
    where?: PatientsWhereInput
    data: XOR<PatientsUpdateWithoutConsultationsInput, PatientsUncheckedUpdateWithoutConsultationsInput>
  }

  export type PatientsUpdateWithoutConsultationsInput = {
    id_patient?: StringFieldUpdateOperationsInput | string
    cree_le?: DateTimeFieldUpdateOperationsInput | Date | string
    modifie_le?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutPatientNestedInput
    rendezVous?: RendezVousUpdateManyWithoutPatientsNestedInput
  }

  export type PatientsUncheckedUpdateWithoutConsultationsInput = {
    id_patient?: StringFieldUpdateOperationsInput | string
    cree_le?: DateTimeFieldUpdateOperationsInput | Date | string
    modifie_le?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    rendezVous?: RendezVousUncheckedUpdateManyWithoutPatientsNestedInput
  }

  export type MedecinsUpsertWithoutConsultationsInput = {
    update: XOR<MedecinsUpdateWithoutConsultationsInput, MedecinsUncheckedUpdateWithoutConsultationsInput>
    create: XOR<MedecinsCreateWithoutConsultationsInput, MedecinsUncheckedCreateWithoutConsultationsInput>
    where?: MedecinsWhereInput
  }

  export type MedecinsUpdateToOneWithWhereWithoutConsultationsInput = {
    where?: MedecinsWhereInput
    data: XOR<MedecinsUpdateWithoutConsultationsInput, MedecinsUncheckedUpdateWithoutConsultationsInput>
  }

  export type MedecinsUpdateWithoutConsultationsInput = {
    id_medecin?: StringFieldUpdateOperationsInput | string
    specialite?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    nombre_signalement?: IntFieldUpdateOperationsInput | number
    cree_le?: DateTimeFieldUpdateOperationsInput | Date | string
    modifie_le?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutMedecinNestedInput
    rendezVous?: RendezVousUpdateManyWithoutMedecinsNestedInput
    posts?: PostsUpdateManyWithoutMedecinsNestedInput
  }

  export type MedecinsUncheckedUpdateWithoutConsultationsInput = {
    id_medecin?: StringFieldUpdateOperationsInput | string
    specialite?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    nombre_signalement?: IntFieldUpdateOperationsInput | number
    cree_le?: DateTimeFieldUpdateOperationsInput | Date | string
    modifie_le?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    rendezVous?: RendezVousUncheckedUpdateManyWithoutMedecinsNestedInput
    posts?: PostsUncheckedUpdateManyWithoutMedecinsNestedInput
  }

  export type FichiersUpsertWithWhereUniqueWithoutConsultationsInput = {
    where: FichiersWhereUniqueInput
    update: XOR<FichiersUpdateWithoutConsultationsInput, FichiersUncheckedUpdateWithoutConsultationsInput>
    create: XOR<FichiersCreateWithoutConsultationsInput, FichiersUncheckedCreateWithoutConsultationsInput>
  }

  export type FichiersUpdateWithWhereUniqueWithoutConsultationsInput = {
    where: FichiersWhereUniqueInput
    data: XOR<FichiersUpdateWithoutConsultationsInput, FichiersUncheckedUpdateWithoutConsultationsInput>
  }

  export type FichiersUpdateManyWithWhereWithoutConsultationsInput = {
    where: FichiersScalarWhereInput
    data: XOR<FichiersUpdateManyMutationInput, FichiersUncheckedUpdateManyWithoutConsultationsInput>
  }

  export type FichiersScalarWhereInput = {
    AND?: FichiersScalarWhereInput | FichiersScalarWhereInput[]
    OR?: FichiersScalarWhereInput[]
    NOT?: FichiersScalarWhereInput | FichiersScalarWhereInput[]
    id_fichier?: StringFilter<"Fichiers"> | string
    lien_fichier?: StringFilter<"Fichiers"> | string
    cree_le?: DateTimeFilter<"Fichiers"> | Date | string
    modifie_le?: DateTimeFilter<"Fichiers"> | Date | string
    id_consultation?: StringFilter<"Fichiers"> | string
  }

  export type ConsultationsCreateWithoutFichiersInput = {
    id_consultation?: string
    diagnostique: string
    cree_le?: Date | string
    modifie_le?: Date | string
    patient: PatientsCreateNestedOneWithoutConsultationsInput
    medecin: MedecinsCreateNestedOneWithoutConsultationsInput
  }

  export type ConsultationsUncheckedCreateWithoutFichiersInput = {
    id_consultation?: string
    diagnostique: string
    cree_le?: Date | string
    modifie_le?: Date | string
    id_patient: string
    id_medecin: string
  }

  export type ConsultationsCreateOrConnectWithoutFichiersInput = {
    where: ConsultationsWhereUniqueInput
    create: XOR<ConsultationsCreateWithoutFichiersInput, ConsultationsUncheckedCreateWithoutFichiersInput>
  }

  export type ConsultationsUpsertWithoutFichiersInput = {
    update: XOR<ConsultationsUpdateWithoutFichiersInput, ConsultationsUncheckedUpdateWithoutFichiersInput>
    create: XOR<ConsultationsCreateWithoutFichiersInput, ConsultationsUncheckedCreateWithoutFichiersInput>
    where?: ConsultationsWhereInput
  }

  export type ConsultationsUpdateToOneWithWhereWithoutFichiersInput = {
    where?: ConsultationsWhereInput
    data: XOR<ConsultationsUpdateWithoutFichiersInput, ConsultationsUncheckedUpdateWithoutFichiersInput>
  }

  export type ConsultationsUpdateWithoutFichiersInput = {
    id_consultation?: StringFieldUpdateOperationsInput | string
    diagnostique?: StringFieldUpdateOperationsInput | string
    cree_le?: DateTimeFieldUpdateOperationsInput | Date | string
    modifie_le?: DateTimeFieldUpdateOperationsInput | Date | string
    patient?: PatientsUpdateOneRequiredWithoutConsultationsNestedInput
    medecin?: MedecinsUpdateOneRequiredWithoutConsultationsNestedInput
  }

  export type ConsultationsUncheckedUpdateWithoutFichiersInput = {
    id_consultation?: StringFieldUpdateOperationsInput | string
    diagnostique?: StringFieldUpdateOperationsInput | string
    cree_le?: DateTimeFieldUpdateOperationsInput | Date | string
    modifie_le?: DateTimeFieldUpdateOperationsInput | Date | string
    id_patient?: StringFieldUpdateOperationsInput | string
    id_medecin?: StringFieldUpdateOperationsInput | string
  }

  export type SessionCreateManyUserInput = {
    id: string
    expiresAt: Date | string
    token: string
    createdAt?: Date | string
    updatedAt?: Date | string
    ipAddress?: string | null
    userAgent?: string | null
    impersonatedBy?: string | null
  }

  export type AccountCreateManyUserInput = {
    id: string
    accountId: string
    providerId: string
    accessToken?: string | null
    refreshToken?: string | null
    idToken?: string | null
    accessTokenExpiresAt?: Date | string | null
    refreshTokenExpiresAt?: Date | string | null
    scope?: string | null
    password?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SignalementsCreateManyUserInput = {
    id?: string
    sujet?: string | null
    message: string
    cree_le?: Date | string
    modifie_le?: Date | string
  }

  export type PatientsCreateManyUserInput = {
    id_patient?: string
    cree_le?: Date | string
    modifie_le?: Date | string
  }

  export type MedecinsCreateManyUserInput = {
    id_medecin?: string
    specialite: string
    description: string
    nombre_signalement?: number
    cree_le?: Date | string
    modifie_le?: Date | string
  }

  export type SessionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    impersonatedBy?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SessionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    impersonatedBy?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SessionUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    impersonatedBy?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccountUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    idToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    idToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    idToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SignalementsUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    sujet?: NullableStringFieldUpdateOperationsInput | string | null
    message?: StringFieldUpdateOperationsInput | string
    cree_le?: DateTimeFieldUpdateOperationsInput | Date | string
    modifie_le?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SignalementsUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    sujet?: NullableStringFieldUpdateOperationsInput | string | null
    message?: StringFieldUpdateOperationsInput | string
    cree_le?: DateTimeFieldUpdateOperationsInput | Date | string
    modifie_le?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SignalementsUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    sujet?: NullableStringFieldUpdateOperationsInput | string | null
    message?: StringFieldUpdateOperationsInput | string
    cree_le?: DateTimeFieldUpdateOperationsInput | Date | string
    modifie_le?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PatientsUpdateWithoutUserInput = {
    id_patient?: StringFieldUpdateOperationsInput | string
    cree_le?: DateTimeFieldUpdateOperationsInput | Date | string
    modifie_le?: DateTimeFieldUpdateOperationsInput | Date | string
    rendezVous?: RendezVousUpdateManyWithoutPatientsNestedInput
    consultations?: ConsultationsUpdateManyWithoutPatientNestedInput
  }

  export type PatientsUncheckedUpdateWithoutUserInput = {
    id_patient?: StringFieldUpdateOperationsInput | string
    cree_le?: DateTimeFieldUpdateOperationsInput | Date | string
    modifie_le?: DateTimeFieldUpdateOperationsInput | Date | string
    rendezVous?: RendezVousUncheckedUpdateManyWithoutPatientsNestedInput
    consultations?: ConsultationsUncheckedUpdateManyWithoutPatientNestedInput
  }

  export type PatientsUncheckedUpdateManyWithoutUserInput = {
    id_patient?: StringFieldUpdateOperationsInput | string
    cree_le?: DateTimeFieldUpdateOperationsInput | Date | string
    modifie_le?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MedecinsUpdateWithoutUserInput = {
    id_medecin?: StringFieldUpdateOperationsInput | string
    specialite?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    nombre_signalement?: IntFieldUpdateOperationsInput | number
    cree_le?: DateTimeFieldUpdateOperationsInput | Date | string
    modifie_le?: DateTimeFieldUpdateOperationsInput | Date | string
    rendezVous?: RendezVousUpdateManyWithoutMedecinsNestedInput
    posts?: PostsUpdateManyWithoutMedecinsNestedInput
    consultations?: ConsultationsUpdateManyWithoutMedecinNestedInput
  }

  export type MedecinsUncheckedUpdateWithoutUserInput = {
    id_medecin?: StringFieldUpdateOperationsInput | string
    specialite?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    nombre_signalement?: IntFieldUpdateOperationsInput | number
    cree_le?: DateTimeFieldUpdateOperationsInput | Date | string
    modifie_le?: DateTimeFieldUpdateOperationsInput | Date | string
    rendezVous?: RendezVousUncheckedUpdateManyWithoutMedecinsNestedInput
    posts?: PostsUncheckedUpdateManyWithoutMedecinsNestedInput
    consultations?: ConsultationsUncheckedUpdateManyWithoutMedecinNestedInput
  }

  export type MedecinsUncheckedUpdateManyWithoutUserInput = {
    id_medecin?: StringFieldUpdateOperationsInput | string
    specialite?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    nombre_signalement?: IntFieldUpdateOperationsInput | number
    cree_le?: DateTimeFieldUpdateOperationsInput | Date | string
    modifie_le?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RendezVousCreateManyPatientsInput = {
    id_rdv?: string
    motif: string
    cree_le?: Date | string
    status?: $Enums.StatusRvd
    modifie_le?: Date | string
    id_medecin: string
  }

  export type ConsultationsCreateManyPatientInput = {
    id_consultation?: string
    diagnostique: string
    cree_le?: Date | string
    modifie_le?: Date | string
    id_medecin: string
  }

  export type RendezVousUpdateWithoutPatientsInput = {
    id_rdv?: StringFieldUpdateOperationsInput | string
    motif?: StringFieldUpdateOperationsInput | string
    cree_le?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusRvdFieldUpdateOperationsInput | $Enums.StatusRvd
    modifie_le?: DateTimeFieldUpdateOperationsInput | Date | string
    medecins?: MedecinsUpdateOneRequiredWithoutRendezVousNestedInput
  }

  export type RendezVousUncheckedUpdateWithoutPatientsInput = {
    id_rdv?: StringFieldUpdateOperationsInput | string
    motif?: StringFieldUpdateOperationsInput | string
    cree_le?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusRvdFieldUpdateOperationsInput | $Enums.StatusRvd
    modifie_le?: DateTimeFieldUpdateOperationsInput | Date | string
    id_medecin?: StringFieldUpdateOperationsInput | string
  }

  export type RendezVousUncheckedUpdateManyWithoutPatientsInput = {
    id_rdv?: StringFieldUpdateOperationsInput | string
    motif?: StringFieldUpdateOperationsInput | string
    cree_le?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusRvdFieldUpdateOperationsInput | $Enums.StatusRvd
    modifie_le?: DateTimeFieldUpdateOperationsInput | Date | string
    id_medecin?: StringFieldUpdateOperationsInput | string
  }

  export type ConsultationsUpdateWithoutPatientInput = {
    id_consultation?: StringFieldUpdateOperationsInput | string
    diagnostique?: StringFieldUpdateOperationsInput | string
    cree_le?: DateTimeFieldUpdateOperationsInput | Date | string
    modifie_le?: DateTimeFieldUpdateOperationsInput | Date | string
    medecin?: MedecinsUpdateOneRequiredWithoutConsultationsNestedInput
    fichiers?: FichiersUpdateManyWithoutConsultationsNestedInput
  }

  export type ConsultationsUncheckedUpdateWithoutPatientInput = {
    id_consultation?: StringFieldUpdateOperationsInput | string
    diagnostique?: StringFieldUpdateOperationsInput | string
    cree_le?: DateTimeFieldUpdateOperationsInput | Date | string
    modifie_le?: DateTimeFieldUpdateOperationsInput | Date | string
    id_medecin?: StringFieldUpdateOperationsInput | string
    fichiers?: FichiersUncheckedUpdateManyWithoutConsultationsNestedInput
  }

  export type ConsultationsUncheckedUpdateManyWithoutPatientInput = {
    id_consultation?: StringFieldUpdateOperationsInput | string
    diagnostique?: StringFieldUpdateOperationsInput | string
    cree_le?: DateTimeFieldUpdateOperationsInput | Date | string
    modifie_le?: DateTimeFieldUpdateOperationsInput | Date | string
    id_medecin?: StringFieldUpdateOperationsInput | string
  }

  export type RendezVousCreateManyMedecinsInput = {
    id_rdv?: string
    motif: string
    cree_le?: Date | string
    status?: $Enums.StatusRvd
    modifie_le?: Date | string
    id_patient: string
  }

  export type PostsCreateManyMedecinsInput = {
    id_post?: string
    slug: string
    titre: string
    description: string
    lien_image?: string | null
    star?: number
    nombre_aime?: number
    nombre_non_aime?: number
    nombre_vue?: number
    cree_le?: Date | string
    modifie_le?: Date | string
  }

  export type ConsultationsCreateManyMedecinInput = {
    id_consultation?: string
    diagnostique: string
    cree_le?: Date | string
    modifie_le?: Date | string
    id_patient: string
  }

  export type RendezVousUpdateWithoutMedecinsInput = {
    id_rdv?: StringFieldUpdateOperationsInput | string
    motif?: StringFieldUpdateOperationsInput | string
    cree_le?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusRvdFieldUpdateOperationsInput | $Enums.StatusRvd
    modifie_le?: DateTimeFieldUpdateOperationsInput | Date | string
    patients?: PatientsUpdateOneRequiredWithoutRendezVousNestedInput
  }

  export type RendezVousUncheckedUpdateWithoutMedecinsInput = {
    id_rdv?: StringFieldUpdateOperationsInput | string
    motif?: StringFieldUpdateOperationsInput | string
    cree_le?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusRvdFieldUpdateOperationsInput | $Enums.StatusRvd
    modifie_le?: DateTimeFieldUpdateOperationsInput | Date | string
    id_patient?: StringFieldUpdateOperationsInput | string
  }

  export type RendezVousUncheckedUpdateManyWithoutMedecinsInput = {
    id_rdv?: StringFieldUpdateOperationsInput | string
    motif?: StringFieldUpdateOperationsInput | string
    cree_le?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusRvdFieldUpdateOperationsInput | $Enums.StatusRvd
    modifie_le?: DateTimeFieldUpdateOperationsInput | Date | string
    id_patient?: StringFieldUpdateOperationsInput | string
  }

  export type PostsUpdateWithoutMedecinsInput = {
    id_post?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    titre?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    lien_image?: NullableStringFieldUpdateOperationsInput | string | null
    star?: IntFieldUpdateOperationsInput | number
    nombre_aime?: IntFieldUpdateOperationsInput | number
    nombre_non_aime?: IntFieldUpdateOperationsInput | number
    nombre_vue?: IntFieldUpdateOperationsInput | number
    cree_le?: DateTimeFieldUpdateOperationsInput | Date | string
    modifie_le?: DateTimeFieldUpdateOperationsInput | Date | string
    commentaires?: CommentairesUpdateManyWithoutPostsNestedInput
  }

  export type PostsUncheckedUpdateWithoutMedecinsInput = {
    id_post?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    titre?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    lien_image?: NullableStringFieldUpdateOperationsInput | string | null
    star?: IntFieldUpdateOperationsInput | number
    nombre_aime?: IntFieldUpdateOperationsInput | number
    nombre_non_aime?: IntFieldUpdateOperationsInput | number
    nombre_vue?: IntFieldUpdateOperationsInput | number
    cree_le?: DateTimeFieldUpdateOperationsInput | Date | string
    modifie_le?: DateTimeFieldUpdateOperationsInput | Date | string
    commentaires?: CommentairesUncheckedUpdateManyWithoutPostsNestedInput
  }

  export type PostsUncheckedUpdateManyWithoutMedecinsInput = {
    id_post?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    titre?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    lien_image?: NullableStringFieldUpdateOperationsInput | string | null
    star?: IntFieldUpdateOperationsInput | number
    nombre_aime?: IntFieldUpdateOperationsInput | number
    nombre_non_aime?: IntFieldUpdateOperationsInput | number
    nombre_vue?: IntFieldUpdateOperationsInput | number
    cree_le?: DateTimeFieldUpdateOperationsInput | Date | string
    modifie_le?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConsultationsUpdateWithoutMedecinInput = {
    id_consultation?: StringFieldUpdateOperationsInput | string
    diagnostique?: StringFieldUpdateOperationsInput | string
    cree_le?: DateTimeFieldUpdateOperationsInput | Date | string
    modifie_le?: DateTimeFieldUpdateOperationsInput | Date | string
    patient?: PatientsUpdateOneRequiredWithoutConsultationsNestedInput
    fichiers?: FichiersUpdateManyWithoutConsultationsNestedInput
  }

  export type ConsultationsUncheckedUpdateWithoutMedecinInput = {
    id_consultation?: StringFieldUpdateOperationsInput | string
    diagnostique?: StringFieldUpdateOperationsInput | string
    cree_le?: DateTimeFieldUpdateOperationsInput | Date | string
    modifie_le?: DateTimeFieldUpdateOperationsInput | Date | string
    id_patient?: StringFieldUpdateOperationsInput | string
    fichiers?: FichiersUncheckedUpdateManyWithoutConsultationsNestedInput
  }

  export type ConsultationsUncheckedUpdateManyWithoutMedecinInput = {
    id_consultation?: StringFieldUpdateOperationsInput | string
    diagnostique?: StringFieldUpdateOperationsInput | string
    cree_le?: DateTimeFieldUpdateOperationsInput | Date | string
    modifie_le?: DateTimeFieldUpdateOperationsInput | Date | string
    id_patient?: StringFieldUpdateOperationsInput | string
  }

  export type CommentairesCreateManyPostsInput = {
    id_commentaire?: string
    commentaire: string
    cree_le?: Date | string
    modifie_le?: Date | string
  }

  export type CommentairesUpdateWithoutPostsInput = {
    id_commentaire?: StringFieldUpdateOperationsInput | string
    commentaire?: StringFieldUpdateOperationsInput | string
    cree_le?: DateTimeFieldUpdateOperationsInput | Date | string
    modifie_le?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentairesUncheckedUpdateWithoutPostsInput = {
    id_commentaire?: StringFieldUpdateOperationsInput | string
    commentaire?: StringFieldUpdateOperationsInput | string
    cree_le?: DateTimeFieldUpdateOperationsInput | Date | string
    modifie_le?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentairesUncheckedUpdateManyWithoutPostsInput = {
    id_commentaire?: StringFieldUpdateOperationsInput | string
    commentaire?: StringFieldUpdateOperationsInput | string
    cree_le?: DateTimeFieldUpdateOperationsInput | Date | string
    modifie_le?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FichiersCreateManyConsultationsInput = {
    id_fichier?: string
    lien_fichier: string
    cree_le?: Date | string
    modifie_le?: Date | string
  }

  export type FichiersUpdateWithoutConsultationsInput = {
    id_fichier?: StringFieldUpdateOperationsInput | string
    lien_fichier?: StringFieldUpdateOperationsInput | string
    cree_le?: DateTimeFieldUpdateOperationsInput | Date | string
    modifie_le?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FichiersUncheckedUpdateWithoutConsultationsInput = {
    id_fichier?: StringFieldUpdateOperationsInput | string
    lien_fichier?: StringFieldUpdateOperationsInput | string
    cree_le?: DateTimeFieldUpdateOperationsInput | Date | string
    modifie_le?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FichiersUncheckedUpdateManyWithoutConsultationsInput = {
    id_fichier?: StringFieldUpdateOperationsInput | string
    lien_fichier?: StringFieldUpdateOperationsInput | string
    cree_le?: DateTimeFieldUpdateOperationsInput | Date | string
    modifie_le?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}