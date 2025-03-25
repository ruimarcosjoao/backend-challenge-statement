
/**
 * Client
**/

import * as runtime from './runtime/library.js';
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
 * Model Establishment
 * 
 */
export type Establishment = $Result.DefaultSelection<Prisma.$EstablishmentPayload>
/**
 * Model Vehicle
 * 
 */
export type Vehicle = $Result.DefaultSelection<Prisma.$VehiclePayload>
/**
 * Model ParkingEntry
 * 
 */
export type ParkingEntry = $Result.DefaultSelection<Prisma.$ParkingEntryPayload>
/**
 * Model Report
 * 
 */
export type Report = $Result.DefaultSelection<Prisma.$ReportPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  USER: 'USER',
  ADMIN: 'ADMIN'
};

export type Role = (typeof Role)[keyof typeof Role]


export const VehicleType: {
  CAR: 'CAR',
  MOTORCYCLE: 'MOTORCYCLE'
};

export type VehicleType = (typeof VehicleType)[keyof typeof VehicleType]


export const ReportType: {
  ENTRY_EXIT_SUMMARY: 'ENTRY_EXIT_SUMMARY',
  HOURLY_SUMMARY: 'HOURLY_SUMMARY'
};

export type ReportType = (typeof ReportType)[keyof typeof ReportType]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type VehicleType = $Enums.VehicleType

export const VehicleType: typeof $Enums.VehicleType

export type ReportType = $Enums.ReportType

export const ReportType: typeof $Enums.ReportType

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
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
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
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
   * `prisma.establishment`: Exposes CRUD operations for the **Establishment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Establishments
    * const establishments = await prisma.establishment.findMany()
    * ```
    */
  get establishment(): Prisma.EstablishmentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.vehicle`: Exposes CRUD operations for the **Vehicle** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Vehicles
    * const vehicles = await prisma.vehicle.findMany()
    * ```
    */
  get vehicle(): Prisma.VehicleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.parkingEntry`: Exposes CRUD operations for the **ParkingEntry** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ParkingEntries
    * const parkingEntries = await prisma.parkingEntry.findMany()
    * ```
    */
  get parkingEntry(): Prisma.ParkingEntryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.report`: Exposes CRUD operations for the **Report** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Reports
    * const reports = await prisma.report.findMany()
    * ```
    */
  get report(): Prisma.ReportDelegate<ExtArgs, ClientOptions>;
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
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

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
   * Prisma Client JS version: 6.5.0
   * Query Engine version: 173f8d54f8d52e692c7e27e72a88314ec7aeff60
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


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
    Establishment: 'Establishment',
    Vehicle: 'Vehicle',
    ParkingEntry: 'ParkingEntry',
    Report: 'Report'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "establishment" | "vehicle" | "parkingEntry" | "report"
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
      Establishment: {
        payload: Prisma.$EstablishmentPayload<ExtArgs>
        fields: Prisma.EstablishmentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EstablishmentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstablishmentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EstablishmentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstablishmentPayload>
          }
          findFirst: {
            args: Prisma.EstablishmentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstablishmentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EstablishmentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstablishmentPayload>
          }
          findMany: {
            args: Prisma.EstablishmentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstablishmentPayload>[]
          }
          create: {
            args: Prisma.EstablishmentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstablishmentPayload>
          }
          createMany: {
            args: Prisma.EstablishmentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EstablishmentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstablishmentPayload>[]
          }
          delete: {
            args: Prisma.EstablishmentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstablishmentPayload>
          }
          update: {
            args: Prisma.EstablishmentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstablishmentPayload>
          }
          deleteMany: {
            args: Prisma.EstablishmentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EstablishmentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EstablishmentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstablishmentPayload>[]
          }
          upsert: {
            args: Prisma.EstablishmentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstablishmentPayload>
          }
          aggregate: {
            args: Prisma.EstablishmentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEstablishment>
          }
          groupBy: {
            args: Prisma.EstablishmentGroupByArgs<ExtArgs>
            result: $Utils.Optional<EstablishmentGroupByOutputType>[]
          }
          count: {
            args: Prisma.EstablishmentCountArgs<ExtArgs>
            result: $Utils.Optional<EstablishmentCountAggregateOutputType> | number
          }
        }
      }
      Vehicle: {
        payload: Prisma.$VehiclePayload<ExtArgs>
        fields: Prisma.VehicleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VehicleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiclePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VehicleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiclePayload>
          }
          findFirst: {
            args: Prisma.VehicleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiclePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VehicleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiclePayload>
          }
          findMany: {
            args: Prisma.VehicleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiclePayload>[]
          }
          create: {
            args: Prisma.VehicleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiclePayload>
          }
          createMany: {
            args: Prisma.VehicleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VehicleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiclePayload>[]
          }
          delete: {
            args: Prisma.VehicleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiclePayload>
          }
          update: {
            args: Prisma.VehicleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiclePayload>
          }
          deleteMany: {
            args: Prisma.VehicleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VehicleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VehicleUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiclePayload>[]
          }
          upsert: {
            args: Prisma.VehicleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiclePayload>
          }
          aggregate: {
            args: Prisma.VehicleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVehicle>
          }
          groupBy: {
            args: Prisma.VehicleGroupByArgs<ExtArgs>
            result: $Utils.Optional<VehicleGroupByOutputType>[]
          }
          count: {
            args: Prisma.VehicleCountArgs<ExtArgs>
            result: $Utils.Optional<VehicleCountAggregateOutputType> | number
          }
        }
      }
      ParkingEntry: {
        payload: Prisma.$ParkingEntryPayload<ExtArgs>
        fields: Prisma.ParkingEntryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ParkingEntryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParkingEntryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ParkingEntryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParkingEntryPayload>
          }
          findFirst: {
            args: Prisma.ParkingEntryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParkingEntryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ParkingEntryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParkingEntryPayload>
          }
          findMany: {
            args: Prisma.ParkingEntryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParkingEntryPayload>[]
          }
          create: {
            args: Prisma.ParkingEntryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParkingEntryPayload>
          }
          createMany: {
            args: Prisma.ParkingEntryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ParkingEntryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParkingEntryPayload>[]
          }
          delete: {
            args: Prisma.ParkingEntryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParkingEntryPayload>
          }
          update: {
            args: Prisma.ParkingEntryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParkingEntryPayload>
          }
          deleteMany: {
            args: Prisma.ParkingEntryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ParkingEntryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ParkingEntryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParkingEntryPayload>[]
          }
          upsert: {
            args: Prisma.ParkingEntryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParkingEntryPayload>
          }
          aggregate: {
            args: Prisma.ParkingEntryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateParkingEntry>
          }
          groupBy: {
            args: Prisma.ParkingEntryGroupByArgs<ExtArgs>
            result: $Utils.Optional<ParkingEntryGroupByOutputType>[]
          }
          count: {
            args: Prisma.ParkingEntryCountArgs<ExtArgs>
            result: $Utils.Optional<ParkingEntryCountAggregateOutputType> | number
          }
        }
      }
      Report: {
        payload: Prisma.$ReportPayload<ExtArgs>
        fields: Prisma.ReportFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReportFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReportFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportPayload>
          }
          findFirst: {
            args: Prisma.ReportFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReportFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportPayload>
          }
          findMany: {
            args: Prisma.ReportFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportPayload>[]
          }
          create: {
            args: Prisma.ReportCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportPayload>
          }
          createMany: {
            args: Prisma.ReportCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ReportCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportPayload>[]
          }
          delete: {
            args: Prisma.ReportDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportPayload>
          }
          update: {
            args: Prisma.ReportUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportPayload>
          }
          deleteMany: {
            args: Prisma.ReportDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ReportUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ReportUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportPayload>[]
          }
          upsert: {
            args: Prisma.ReportUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportPayload>
          }
          aggregate: {
            args: Prisma.ReportAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReport>
          }
          groupBy: {
            args: Prisma.ReportGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReportGroupByOutputType>[]
          }
          count: {
            args: Prisma.ReportCountArgs<ExtArgs>
            result: $Utils.Optional<ReportCountAggregateOutputType> | number
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
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
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
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    establishment?: EstablishmentOmit
    vehicle?: VehicleOmit
    parkingEntry?: ParkingEntryOmit
    report?: ReportOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

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

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

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
    Report: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Report?: boolean | UserCountOutputTypeCountReportArgs
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
  export type UserCountOutputTypeCountReportArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReportWhereInput
  }


  /**
   * Count Type EstablishmentCountOutputType
   */

  export type EstablishmentCountOutputType = {
    ParkingEntry: number
  }

  export type EstablishmentCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ParkingEntry?: boolean | EstablishmentCountOutputTypeCountParkingEntryArgs
  }

  // Custom InputTypes
  /**
   * EstablishmentCountOutputType without action
   */
  export type EstablishmentCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EstablishmentCountOutputType
     */
    select?: EstablishmentCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EstablishmentCountOutputType without action
   */
  export type EstablishmentCountOutputTypeCountParkingEntryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ParkingEntryWhereInput
  }


  /**
   * Count Type VehicleCountOutputType
   */

  export type VehicleCountOutputType = {
    ParkingEntry: number
  }

  export type VehicleCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ParkingEntry?: boolean | VehicleCountOutputTypeCountParkingEntryArgs
  }

  // Custom InputTypes
  /**
   * VehicleCountOutputType without action
   */
  export type VehicleCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VehicleCountOutputType
     */
    select?: VehicleCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * VehicleCountOutputType without action
   */
  export type VehicleCountOutputTypeCountParkingEntryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ParkingEntryWhereInput
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
    username: string | null
    fullName: string | null
    email: string | null
    password: string | null
    role: $Enums.Role | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    username: string | null
    fullName: string | null
    email: string | null
    password: string | null
    role: $Enums.Role | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    username: number
    fullName: number
    email: number
    password: number
    role: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    username?: true
    fullName?: true
    email?: true
    password?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    username?: true
    fullName?: true
    email?: true
    password?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    username?: true
    fullName?: true
    email?: true
    password?: true
    role?: true
    createdAt?: true
    updatedAt?: true
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
    username: string
    fullName: string
    email: string
    password: string
    role: $Enums.Role
    createdAt: Date
    updatedAt: Date
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
    username?: boolean
    fullName?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    Report?: boolean | User$ReportArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    fullName?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    fullName?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    username?: boolean
    fullName?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "username" | "fullName" | "email" | "password" | "role" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Report?: boolean | User$ReportArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      Report: Prisma.$ReportPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      username: string
      fullName: string
      email: string
      password: string
      role: $Enums.Role
      createdAt: Date
      updatedAt: Date
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
    Report<T extends User$ReportArgs<ExtArgs> = {}>(args?: Subset<T, User$ReportArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly username: FieldRef<"User", 'String'>
    readonly fullName: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'Role'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
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
   * User.Report
   */
  export type User$ReportArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Report
     */
    omit?: ReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportInclude<ExtArgs> | null
    where?: ReportWhereInput
    orderBy?: ReportOrderByWithRelationInput | ReportOrderByWithRelationInput[]
    cursor?: ReportWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReportScalarFieldEnum | ReportScalarFieldEnum[]
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
   * Model Establishment
   */

  export type AggregateEstablishment = {
    _count: EstablishmentCountAggregateOutputType | null
    _avg: EstablishmentAvgAggregateOutputType | null
    _sum: EstablishmentSumAggregateOutputType | null
    _min: EstablishmentMinAggregateOutputType | null
    _max: EstablishmentMaxAggregateOutputType | null
  }

  export type EstablishmentAvgAggregateOutputType = {
    motorcycleSlots: number | null
    carSlots: number | null
  }

  export type EstablishmentSumAggregateOutputType = {
    motorcycleSlots: number | null
    carSlots: number | null
  }

  export type EstablishmentMinAggregateOutputType = {
    id: string | null
    name: string | null
    address: string | null
    phone: string | null
    motorcycleSlots: number | null
    carSlots: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EstablishmentMaxAggregateOutputType = {
    id: string | null
    name: string | null
    address: string | null
    phone: string | null
    motorcycleSlots: number | null
    carSlots: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EstablishmentCountAggregateOutputType = {
    id: number
    name: number
    address: number
    phone: number
    motorcycleSlots: number
    carSlots: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type EstablishmentAvgAggregateInputType = {
    motorcycleSlots?: true
    carSlots?: true
  }

  export type EstablishmentSumAggregateInputType = {
    motorcycleSlots?: true
    carSlots?: true
  }

  export type EstablishmentMinAggregateInputType = {
    id?: true
    name?: true
    address?: true
    phone?: true
    motorcycleSlots?: true
    carSlots?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EstablishmentMaxAggregateInputType = {
    id?: true
    name?: true
    address?: true
    phone?: true
    motorcycleSlots?: true
    carSlots?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EstablishmentCountAggregateInputType = {
    id?: true
    name?: true
    address?: true
    phone?: true
    motorcycleSlots?: true
    carSlots?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type EstablishmentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Establishment to aggregate.
     */
    where?: EstablishmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Establishments to fetch.
     */
    orderBy?: EstablishmentOrderByWithRelationInput | EstablishmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EstablishmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Establishments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Establishments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Establishments
    **/
    _count?: true | EstablishmentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EstablishmentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EstablishmentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EstablishmentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EstablishmentMaxAggregateInputType
  }

  export type GetEstablishmentAggregateType<T extends EstablishmentAggregateArgs> = {
        [P in keyof T & keyof AggregateEstablishment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEstablishment[P]>
      : GetScalarType<T[P], AggregateEstablishment[P]>
  }




  export type EstablishmentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EstablishmentWhereInput
    orderBy?: EstablishmentOrderByWithAggregationInput | EstablishmentOrderByWithAggregationInput[]
    by: EstablishmentScalarFieldEnum[] | EstablishmentScalarFieldEnum
    having?: EstablishmentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EstablishmentCountAggregateInputType | true
    _avg?: EstablishmentAvgAggregateInputType
    _sum?: EstablishmentSumAggregateInputType
    _min?: EstablishmentMinAggregateInputType
    _max?: EstablishmentMaxAggregateInputType
  }

  export type EstablishmentGroupByOutputType = {
    id: string
    name: string
    address: string
    phone: string
    motorcycleSlots: number
    carSlots: number
    createdAt: Date
    updatedAt: Date
    _count: EstablishmentCountAggregateOutputType | null
    _avg: EstablishmentAvgAggregateOutputType | null
    _sum: EstablishmentSumAggregateOutputType | null
    _min: EstablishmentMinAggregateOutputType | null
    _max: EstablishmentMaxAggregateOutputType | null
  }

  type GetEstablishmentGroupByPayload<T extends EstablishmentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EstablishmentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EstablishmentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EstablishmentGroupByOutputType[P]>
            : GetScalarType<T[P], EstablishmentGroupByOutputType[P]>
        }
      >
    >


  export type EstablishmentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    address?: boolean
    phone?: boolean
    motorcycleSlots?: boolean
    carSlots?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    ParkingEntry?: boolean | Establishment$ParkingEntryArgs<ExtArgs>
    _count?: boolean | EstablishmentCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["establishment"]>

  export type EstablishmentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    address?: boolean
    phone?: boolean
    motorcycleSlots?: boolean
    carSlots?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["establishment"]>

  export type EstablishmentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    address?: boolean
    phone?: boolean
    motorcycleSlots?: boolean
    carSlots?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["establishment"]>

  export type EstablishmentSelectScalar = {
    id?: boolean
    name?: boolean
    address?: boolean
    phone?: boolean
    motorcycleSlots?: boolean
    carSlots?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type EstablishmentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "address" | "phone" | "motorcycleSlots" | "carSlots" | "createdAt" | "updatedAt", ExtArgs["result"]["establishment"]>
  export type EstablishmentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ParkingEntry?: boolean | Establishment$ParkingEntryArgs<ExtArgs>
    _count?: boolean | EstablishmentCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type EstablishmentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type EstablishmentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $EstablishmentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Establishment"
    objects: {
      ParkingEntry: Prisma.$ParkingEntryPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      address: string
      phone: string
      motorcycleSlots: number
      carSlots: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["establishment"]>
    composites: {}
  }

  type EstablishmentGetPayload<S extends boolean | null | undefined | EstablishmentDefaultArgs> = $Result.GetResult<Prisma.$EstablishmentPayload, S>

  type EstablishmentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EstablishmentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EstablishmentCountAggregateInputType | true
    }

  export interface EstablishmentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Establishment'], meta: { name: 'Establishment' } }
    /**
     * Find zero or one Establishment that matches the filter.
     * @param {EstablishmentFindUniqueArgs} args - Arguments to find a Establishment
     * @example
     * // Get one Establishment
     * const establishment = await prisma.establishment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EstablishmentFindUniqueArgs>(args: SelectSubset<T, EstablishmentFindUniqueArgs<ExtArgs>>): Prisma__EstablishmentClient<$Result.GetResult<Prisma.$EstablishmentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Establishment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EstablishmentFindUniqueOrThrowArgs} args - Arguments to find a Establishment
     * @example
     * // Get one Establishment
     * const establishment = await prisma.establishment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EstablishmentFindUniqueOrThrowArgs>(args: SelectSubset<T, EstablishmentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EstablishmentClient<$Result.GetResult<Prisma.$EstablishmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Establishment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EstablishmentFindFirstArgs} args - Arguments to find a Establishment
     * @example
     * // Get one Establishment
     * const establishment = await prisma.establishment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EstablishmentFindFirstArgs>(args?: SelectSubset<T, EstablishmentFindFirstArgs<ExtArgs>>): Prisma__EstablishmentClient<$Result.GetResult<Prisma.$EstablishmentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Establishment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EstablishmentFindFirstOrThrowArgs} args - Arguments to find a Establishment
     * @example
     * // Get one Establishment
     * const establishment = await prisma.establishment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EstablishmentFindFirstOrThrowArgs>(args?: SelectSubset<T, EstablishmentFindFirstOrThrowArgs<ExtArgs>>): Prisma__EstablishmentClient<$Result.GetResult<Prisma.$EstablishmentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Establishments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EstablishmentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Establishments
     * const establishments = await prisma.establishment.findMany()
     * 
     * // Get first 10 Establishments
     * const establishments = await prisma.establishment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const establishmentWithIdOnly = await prisma.establishment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EstablishmentFindManyArgs>(args?: SelectSubset<T, EstablishmentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EstablishmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Establishment.
     * @param {EstablishmentCreateArgs} args - Arguments to create a Establishment.
     * @example
     * // Create one Establishment
     * const Establishment = await prisma.establishment.create({
     *   data: {
     *     // ... data to create a Establishment
     *   }
     * })
     * 
     */
    create<T extends EstablishmentCreateArgs>(args: SelectSubset<T, EstablishmentCreateArgs<ExtArgs>>): Prisma__EstablishmentClient<$Result.GetResult<Prisma.$EstablishmentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Establishments.
     * @param {EstablishmentCreateManyArgs} args - Arguments to create many Establishments.
     * @example
     * // Create many Establishments
     * const establishment = await prisma.establishment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EstablishmentCreateManyArgs>(args?: SelectSubset<T, EstablishmentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Establishments and returns the data saved in the database.
     * @param {EstablishmentCreateManyAndReturnArgs} args - Arguments to create many Establishments.
     * @example
     * // Create many Establishments
     * const establishment = await prisma.establishment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Establishments and only return the `id`
     * const establishmentWithIdOnly = await prisma.establishment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EstablishmentCreateManyAndReturnArgs>(args?: SelectSubset<T, EstablishmentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EstablishmentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Establishment.
     * @param {EstablishmentDeleteArgs} args - Arguments to delete one Establishment.
     * @example
     * // Delete one Establishment
     * const Establishment = await prisma.establishment.delete({
     *   where: {
     *     // ... filter to delete one Establishment
     *   }
     * })
     * 
     */
    delete<T extends EstablishmentDeleteArgs>(args: SelectSubset<T, EstablishmentDeleteArgs<ExtArgs>>): Prisma__EstablishmentClient<$Result.GetResult<Prisma.$EstablishmentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Establishment.
     * @param {EstablishmentUpdateArgs} args - Arguments to update one Establishment.
     * @example
     * // Update one Establishment
     * const establishment = await prisma.establishment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EstablishmentUpdateArgs>(args: SelectSubset<T, EstablishmentUpdateArgs<ExtArgs>>): Prisma__EstablishmentClient<$Result.GetResult<Prisma.$EstablishmentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Establishments.
     * @param {EstablishmentDeleteManyArgs} args - Arguments to filter Establishments to delete.
     * @example
     * // Delete a few Establishments
     * const { count } = await prisma.establishment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EstablishmentDeleteManyArgs>(args?: SelectSubset<T, EstablishmentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Establishments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EstablishmentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Establishments
     * const establishment = await prisma.establishment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EstablishmentUpdateManyArgs>(args: SelectSubset<T, EstablishmentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Establishments and returns the data updated in the database.
     * @param {EstablishmentUpdateManyAndReturnArgs} args - Arguments to update many Establishments.
     * @example
     * // Update many Establishments
     * const establishment = await prisma.establishment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Establishments and only return the `id`
     * const establishmentWithIdOnly = await prisma.establishment.updateManyAndReturn({
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
    updateManyAndReturn<T extends EstablishmentUpdateManyAndReturnArgs>(args: SelectSubset<T, EstablishmentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EstablishmentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Establishment.
     * @param {EstablishmentUpsertArgs} args - Arguments to update or create a Establishment.
     * @example
     * // Update or create a Establishment
     * const establishment = await prisma.establishment.upsert({
     *   create: {
     *     // ... data to create a Establishment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Establishment we want to update
     *   }
     * })
     */
    upsert<T extends EstablishmentUpsertArgs>(args: SelectSubset<T, EstablishmentUpsertArgs<ExtArgs>>): Prisma__EstablishmentClient<$Result.GetResult<Prisma.$EstablishmentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Establishments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EstablishmentCountArgs} args - Arguments to filter Establishments to count.
     * @example
     * // Count the number of Establishments
     * const count = await prisma.establishment.count({
     *   where: {
     *     // ... the filter for the Establishments we want to count
     *   }
     * })
    **/
    count<T extends EstablishmentCountArgs>(
      args?: Subset<T, EstablishmentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EstablishmentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Establishment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EstablishmentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EstablishmentAggregateArgs>(args: Subset<T, EstablishmentAggregateArgs>): Prisma.PrismaPromise<GetEstablishmentAggregateType<T>>

    /**
     * Group by Establishment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EstablishmentGroupByArgs} args - Group by arguments.
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
      T extends EstablishmentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EstablishmentGroupByArgs['orderBy'] }
        : { orderBy?: EstablishmentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EstablishmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEstablishmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Establishment model
   */
  readonly fields: EstablishmentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Establishment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EstablishmentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    ParkingEntry<T extends Establishment$ParkingEntryArgs<ExtArgs> = {}>(args?: Subset<T, Establishment$ParkingEntryArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParkingEntryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Establishment model
   */ 
  interface EstablishmentFieldRefs {
    readonly id: FieldRef<"Establishment", 'String'>
    readonly name: FieldRef<"Establishment", 'String'>
    readonly address: FieldRef<"Establishment", 'String'>
    readonly phone: FieldRef<"Establishment", 'String'>
    readonly motorcycleSlots: FieldRef<"Establishment", 'Int'>
    readonly carSlots: FieldRef<"Establishment", 'Int'>
    readonly createdAt: FieldRef<"Establishment", 'DateTime'>
    readonly updatedAt: FieldRef<"Establishment", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Establishment findUnique
   */
  export type EstablishmentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Establishment
     */
    select?: EstablishmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Establishment
     */
    omit?: EstablishmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstablishmentInclude<ExtArgs> | null
    /**
     * Filter, which Establishment to fetch.
     */
    where: EstablishmentWhereUniqueInput
  }

  /**
   * Establishment findUniqueOrThrow
   */
  export type EstablishmentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Establishment
     */
    select?: EstablishmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Establishment
     */
    omit?: EstablishmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstablishmentInclude<ExtArgs> | null
    /**
     * Filter, which Establishment to fetch.
     */
    where: EstablishmentWhereUniqueInput
  }

  /**
   * Establishment findFirst
   */
  export type EstablishmentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Establishment
     */
    select?: EstablishmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Establishment
     */
    omit?: EstablishmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstablishmentInclude<ExtArgs> | null
    /**
     * Filter, which Establishment to fetch.
     */
    where?: EstablishmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Establishments to fetch.
     */
    orderBy?: EstablishmentOrderByWithRelationInput | EstablishmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Establishments.
     */
    cursor?: EstablishmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Establishments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Establishments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Establishments.
     */
    distinct?: EstablishmentScalarFieldEnum | EstablishmentScalarFieldEnum[]
  }

  /**
   * Establishment findFirstOrThrow
   */
  export type EstablishmentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Establishment
     */
    select?: EstablishmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Establishment
     */
    omit?: EstablishmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstablishmentInclude<ExtArgs> | null
    /**
     * Filter, which Establishment to fetch.
     */
    where?: EstablishmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Establishments to fetch.
     */
    orderBy?: EstablishmentOrderByWithRelationInput | EstablishmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Establishments.
     */
    cursor?: EstablishmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Establishments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Establishments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Establishments.
     */
    distinct?: EstablishmentScalarFieldEnum | EstablishmentScalarFieldEnum[]
  }

  /**
   * Establishment findMany
   */
  export type EstablishmentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Establishment
     */
    select?: EstablishmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Establishment
     */
    omit?: EstablishmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstablishmentInclude<ExtArgs> | null
    /**
     * Filter, which Establishments to fetch.
     */
    where?: EstablishmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Establishments to fetch.
     */
    orderBy?: EstablishmentOrderByWithRelationInput | EstablishmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Establishments.
     */
    cursor?: EstablishmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Establishments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Establishments.
     */
    skip?: number
    distinct?: EstablishmentScalarFieldEnum | EstablishmentScalarFieldEnum[]
  }

  /**
   * Establishment create
   */
  export type EstablishmentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Establishment
     */
    select?: EstablishmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Establishment
     */
    omit?: EstablishmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstablishmentInclude<ExtArgs> | null
    /**
     * The data needed to create a Establishment.
     */
    data: XOR<EstablishmentCreateInput, EstablishmentUncheckedCreateInput>
  }

  /**
   * Establishment createMany
   */
  export type EstablishmentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Establishments.
     */
    data: EstablishmentCreateManyInput | EstablishmentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Establishment createManyAndReturn
   */
  export type EstablishmentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Establishment
     */
    select?: EstablishmentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Establishment
     */
    omit?: EstablishmentOmit<ExtArgs> | null
    /**
     * The data used to create many Establishments.
     */
    data: EstablishmentCreateManyInput | EstablishmentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Establishment update
   */
  export type EstablishmentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Establishment
     */
    select?: EstablishmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Establishment
     */
    omit?: EstablishmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstablishmentInclude<ExtArgs> | null
    /**
     * The data needed to update a Establishment.
     */
    data: XOR<EstablishmentUpdateInput, EstablishmentUncheckedUpdateInput>
    /**
     * Choose, which Establishment to update.
     */
    where: EstablishmentWhereUniqueInput
  }

  /**
   * Establishment updateMany
   */
  export type EstablishmentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Establishments.
     */
    data: XOR<EstablishmentUpdateManyMutationInput, EstablishmentUncheckedUpdateManyInput>
    /**
     * Filter which Establishments to update
     */
    where?: EstablishmentWhereInput
    /**
     * Limit how many Establishments to update.
     */
    limit?: number
  }

  /**
   * Establishment updateManyAndReturn
   */
  export type EstablishmentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Establishment
     */
    select?: EstablishmentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Establishment
     */
    omit?: EstablishmentOmit<ExtArgs> | null
    /**
     * The data used to update Establishments.
     */
    data: XOR<EstablishmentUpdateManyMutationInput, EstablishmentUncheckedUpdateManyInput>
    /**
     * Filter which Establishments to update
     */
    where?: EstablishmentWhereInput
    /**
     * Limit how many Establishments to update.
     */
    limit?: number
  }

  /**
   * Establishment upsert
   */
  export type EstablishmentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Establishment
     */
    select?: EstablishmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Establishment
     */
    omit?: EstablishmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstablishmentInclude<ExtArgs> | null
    /**
     * The filter to search for the Establishment to update in case it exists.
     */
    where: EstablishmentWhereUniqueInput
    /**
     * In case the Establishment found by the `where` argument doesn't exist, create a new Establishment with this data.
     */
    create: XOR<EstablishmentCreateInput, EstablishmentUncheckedCreateInput>
    /**
     * In case the Establishment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EstablishmentUpdateInput, EstablishmentUncheckedUpdateInput>
  }

  /**
   * Establishment delete
   */
  export type EstablishmentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Establishment
     */
    select?: EstablishmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Establishment
     */
    omit?: EstablishmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstablishmentInclude<ExtArgs> | null
    /**
     * Filter which Establishment to delete.
     */
    where: EstablishmentWhereUniqueInput
  }

  /**
   * Establishment deleteMany
   */
  export type EstablishmentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Establishments to delete
     */
    where?: EstablishmentWhereInput
    /**
     * Limit how many Establishments to delete.
     */
    limit?: number
  }

  /**
   * Establishment.ParkingEntry
   */
  export type Establishment$ParkingEntryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParkingEntry
     */
    select?: ParkingEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParkingEntry
     */
    omit?: ParkingEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParkingEntryInclude<ExtArgs> | null
    where?: ParkingEntryWhereInput
    orderBy?: ParkingEntryOrderByWithRelationInput | ParkingEntryOrderByWithRelationInput[]
    cursor?: ParkingEntryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ParkingEntryScalarFieldEnum | ParkingEntryScalarFieldEnum[]
  }

  /**
   * Establishment without action
   */
  export type EstablishmentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Establishment
     */
    select?: EstablishmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Establishment
     */
    omit?: EstablishmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstablishmentInclude<ExtArgs> | null
  }


  /**
   * Model Vehicle
   */

  export type AggregateVehicle = {
    _count: VehicleCountAggregateOutputType | null
    _min: VehicleMinAggregateOutputType | null
    _max: VehicleMaxAggregateOutputType | null
  }

  export type VehicleMinAggregateOutputType = {
    id: string | null
    brand: string | null
    model: string | null
    color: string | null
    plate: string | null
    type: $Enums.VehicleType | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type VehicleMaxAggregateOutputType = {
    id: string | null
    brand: string | null
    model: string | null
    color: string | null
    plate: string | null
    type: $Enums.VehicleType | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type VehicleCountAggregateOutputType = {
    id: number
    brand: number
    model: number
    color: number
    plate: number
    type: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type VehicleMinAggregateInputType = {
    id?: true
    brand?: true
    model?: true
    color?: true
    plate?: true
    type?: true
    createdAt?: true
    updatedAt?: true
  }

  export type VehicleMaxAggregateInputType = {
    id?: true
    brand?: true
    model?: true
    color?: true
    plate?: true
    type?: true
    createdAt?: true
    updatedAt?: true
  }

  export type VehicleCountAggregateInputType = {
    id?: true
    brand?: true
    model?: true
    color?: true
    plate?: true
    type?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type VehicleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Vehicle to aggregate.
     */
    where?: VehicleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vehicles to fetch.
     */
    orderBy?: VehicleOrderByWithRelationInput | VehicleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VehicleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vehicles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vehicles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Vehicles
    **/
    _count?: true | VehicleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VehicleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VehicleMaxAggregateInputType
  }

  export type GetVehicleAggregateType<T extends VehicleAggregateArgs> = {
        [P in keyof T & keyof AggregateVehicle]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVehicle[P]>
      : GetScalarType<T[P], AggregateVehicle[P]>
  }




  export type VehicleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VehicleWhereInput
    orderBy?: VehicleOrderByWithAggregationInput | VehicleOrderByWithAggregationInput[]
    by: VehicleScalarFieldEnum[] | VehicleScalarFieldEnum
    having?: VehicleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VehicleCountAggregateInputType | true
    _min?: VehicleMinAggregateInputType
    _max?: VehicleMaxAggregateInputType
  }

  export type VehicleGroupByOutputType = {
    id: string
    brand: string
    model: string
    color: string
    plate: string
    type: $Enums.VehicleType
    createdAt: Date
    updatedAt: Date
    _count: VehicleCountAggregateOutputType | null
    _min: VehicleMinAggregateOutputType | null
    _max: VehicleMaxAggregateOutputType | null
  }

  type GetVehicleGroupByPayload<T extends VehicleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VehicleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VehicleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VehicleGroupByOutputType[P]>
            : GetScalarType<T[P], VehicleGroupByOutputType[P]>
        }
      >
    >


  export type VehicleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    brand?: boolean
    model?: boolean
    color?: boolean
    plate?: boolean
    type?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    ParkingEntry?: boolean | Vehicle$ParkingEntryArgs<ExtArgs>
    _count?: boolean | VehicleCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["vehicle"]>

  export type VehicleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    brand?: boolean
    model?: boolean
    color?: boolean
    plate?: boolean
    type?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["vehicle"]>

  export type VehicleSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    brand?: boolean
    model?: boolean
    color?: boolean
    plate?: boolean
    type?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["vehicle"]>

  export type VehicleSelectScalar = {
    id?: boolean
    brand?: boolean
    model?: boolean
    color?: boolean
    plate?: boolean
    type?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type VehicleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "brand" | "model" | "color" | "plate" | "type" | "createdAt" | "updatedAt", ExtArgs["result"]["vehicle"]>
  export type VehicleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ParkingEntry?: boolean | Vehicle$ParkingEntryArgs<ExtArgs>
    _count?: boolean | VehicleCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type VehicleIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type VehicleIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $VehiclePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Vehicle"
    objects: {
      ParkingEntry: Prisma.$ParkingEntryPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      brand: string
      model: string
      color: string
      plate: string
      type: $Enums.VehicleType
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["vehicle"]>
    composites: {}
  }

  type VehicleGetPayload<S extends boolean | null | undefined | VehicleDefaultArgs> = $Result.GetResult<Prisma.$VehiclePayload, S>

  type VehicleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VehicleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VehicleCountAggregateInputType | true
    }

  export interface VehicleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Vehicle'], meta: { name: 'Vehicle' } }
    /**
     * Find zero or one Vehicle that matches the filter.
     * @param {VehicleFindUniqueArgs} args - Arguments to find a Vehicle
     * @example
     * // Get one Vehicle
     * const vehicle = await prisma.vehicle.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VehicleFindUniqueArgs>(args: SelectSubset<T, VehicleFindUniqueArgs<ExtArgs>>): Prisma__VehicleClient<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Vehicle that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VehicleFindUniqueOrThrowArgs} args - Arguments to find a Vehicle
     * @example
     * // Get one Vehicle
     * const vehicle = await prisma.vehicle.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VehicleFindUniqueOrThrowArgs>(args: SelectSubset<T, VehicleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VehicleClient<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Vehicle that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleFindFirstArgs} args - Arguments to find a Vehicle
     * @example
     * // Get one Vehicle
     * const vehicle = await prisma.vehicle.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VehicleFindFirstArgs>(args?: SelectSubset<T, VehicleFindFirstArgs<ExtArgs>>): Prisma__VehicleClient<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Vehicle that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleFindFirstOrThrowArgs} args - Arguments to find a Vehicle
     * @example
     * // Get one Vehicle
     * const vehicle = await prisma.vehicle.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VehicleFindFirstOrThrowArgs>(args?: SelectSubset<T, VehicleFindFirstOrThrowArgs<ExtArgs>>): Prisma__VehicleClient<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Vehicles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Vehicles
     * const vehicles = await prisma.vehicle.findMany()
     * 
     * // Get first 10 Vehicles
     * const vehicles = await prisma.vehicle.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const vehicleWithIdOnly = await prisma.vehicle.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VehicleFindManyArgs>(args?: SelectSubset<T, VehicleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Vehicle.
     * @param {VehicleCreateArgs} args - Arguments to create a Vehicle.
     * @example
     * // Create one Vehicle
     * const Vehicle = await prisma.vehicle.create({
     *   data: {
     *     // ... data to create a Vehicle
     *   }
     * })
     * 
     */
    create<T extends VehicleCreateArgs>(args: SelectSubset<T, VehicleCreateArgs<ExtArgs>>): Prisma__VehicleClient<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Vehicles.
     * @param {VehicleCreateManyArgs} args - Arguments to create many Vehicles.
     * @example
     * // Create many Vehicles
     * const vehicle = await prisma.vehicle.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VehicleCreateManyArgs>(args?: SelectSubset<T, VehicleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Vehicles and returns the data saved in the database.
     * @param {VehicleCreateManyAndReturnArgs} args - Arguments to create many Vehicles.
     * @example
     * // Create many Vehicles
     * const vehicle = await prisma.vehicle.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Vehicles and only return the `id`
     * const vehicleWithIdOnly = await prisma.vehicle.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VehicleCreateManyAndReturnArgs>(args?: SelectSubset<T, VehicleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Vehicle.
     * @param {VehicleDeleteArgs} args - Arguments to delete one Vehicle.
     * @example
     * // Delete one Vehicle
     * const Vehicle = await prisma.vehicle.delete({
     *   where: {
     *     // ... filter to delete one Vehicle
     *   }
     * })
     * 
     */
    delete<T extends VehicleDeleteArgs>(args: SelectSubset<T, VehicleDeleteArgs<ExtArgs>>): Prisma__VehicleClient<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Vehicle.
     * @param {VehicleUpdateArgs} args - Arguments to update one Vehicle.
     * @example
     * // Update one Vehicle
     * const vehicle = await prisma.vehicle.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VehicleUpdateArgs>(args: SelectSubset<T, VehicleUpdateArgs<ExtArgs>>): Prisma__VehicleClient<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Vehicles.
     * @param {VehicleDeleteManyArgs} args - Arguments to filter Vehicles to delete.
     * @example
     * // Delete a few Vehicles
     * const { count } = await prisma.vehicle.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VehicleDeleteManyArgs>(args?: SelectSubset<T, VehicleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Vehicles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Vehicles
     * const vehicle = await prisma.vehicle.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VehicleUpdateManyArgs>(args: SelectSubset<T, VehicleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Vehicles and returns the data updated in the database.
     * @param {VehicleUpdateManyAndReturnArgs} args - Arguments to update many Vehicles.
     * @example
     * // Update many Vehicles
     * const vehicle = await prisma.vehicle.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Vehicles and only return the `id`
     * const vehicleWithIdOnly = await prisma.vehicle.updateManyAndReturn({
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
    updateManyAndReturn<T extends VehicleUpdateManyAndReturnArgs>(args: SelectSubset<T, VehicleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Vehicle.
     * @param {VehicleUpsertArgs} args - Arguments to update or create a Vehicle.
     * @example
     * // Update or create a Vehicle
     * const vehicle = await prisma.vehicle.upsert({
     *   create: {
     *     // ... data to create a Vehicle
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Vehicle we want to update
     *   }
     * })
     */
    upsert<T extends VehicleUpsertArgs>(args: SelectSubset<T, VehicleUpsertArgs<ExtArgs>>): Prisma__VehicleClient<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Vehicles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleCountArgs} args - Arguments to filter Vehicles to count.
     * @example
     * // Count the number of Vehicles
     * const count = await prisma.vehicle.count({
     *   where: {
     *     // ... the filter for the Vehicles we want to count
     *   }
     * })
    **/
    count<T extends VehicleCountArgs>(
      args?: Subset<T, VehicleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VehicleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Vehicle.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends VehicleAggregateArgs>(args: Subset<T, VehicleAggregateArgs>): Prisma.PrismaPromise<GetVehicleAggregateType<T>>

    /**
     * Group by Vehicle.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleGroupByArgs} args - Group by arguments.
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
      T extends VehicleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VehicleGroupByArgs['orderBy'] }
        : { orderBy?: VehicleGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, VehicleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVehicleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Vehicle model
   */
  readonly fields: VehicleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Vehicle.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VehicleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    ParkingEntry<T extends Vehicle$ParkingEntryArgs<ExtArgs> = {}>(args?: Subset<T, Vehicle$ParkingEntryArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParkingEntryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Vehicle model
   */ 
  interface VehicleFieldRefs {
    readonly id: FieldRef<"Vehicle", 'String'>
    readonly brand: FieldRef<"Vehicle", 'String'>
    readonly model: FieldRef<"Vehicle", 'String'>
    readonly color: FieldRef<"Vehicle", 'String'>
    readonly plate: FieldRef<"Vehicle", 'String'>
    readonly type: FieldRef<"Vehicle", 'VehicleType'>
    readonly createdAt: FieldRef<"Vehicle", 'DateTime'>
    readonly updatedAt: FieldRef<"Vehicle", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Vehicle findUnique
   */
  export type VehicleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicle
     */
    omit?: VehicleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleInclude<ExtArgs> | null
    /**
     * Filter, which Vehicle to fetch.
     */
    where: VehicleWhereUniqueInput
  }

  /**
   * Vehicle findUniqueOrThrow
   */
  export type VehicleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicle
     */
    omit?: VehicleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleInclude<ExtArgs> | null
    /**
     * Filter, which Vehicle to fetch.
     */
    where: VehicleWhereUniqueInput
  }

  /**
   * Vehicle findFirst
   */
  export type VehicleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicle
     */
    omit?: VehicleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleInclude<ExtArgs> | null
    /**
     * Filter, which Vehicle to fetch.
     */
    where?: VehicleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vehicles to fetch.
     */
    orderBy?: VehicleOrderByWithRelationInput | VehicleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Vehicles.
     */
    cursor?: VehicleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vehicles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vehicles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Vehicles.
     */
    distinct?: VehicleScalarFieldEnum | VehicleScalarFieldEnum[]
  }

  /**
   * Vehicle findFirstOrThrow
   */
  export type VehicleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicle
     */
    omit?: VehicleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleInclude<ExtArgs> | null
    /**
     * Filter, which Vehicle to fetch.
     */
    where?: VehicleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vehicles to fetch.
     */
    orderBy?: VehicleOrderByWithRelationInput | VehicleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Vehicles.
     */
    cursor?: VehicleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vehicles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vehicles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Vehicles.
     */
    distinct?: VehicleScalarFieldEnum | VehicleScalarFieldEnum[]
  }

  /**
   * Vehicle findMany
   */
  export type VehicleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicle
     */
    omit?: VehicleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleInclude<ExtArgs> | null
    /**
     * Filter, which Vehicles to fetch.
     */
    where?: VehicleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vehicles to fetch.
     */
    orderBy?: VehicleOrderByWithRelationInput | VehicleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Vehicles.
     */
    cursor?: VehicleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vehicles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vehicles.
     */
    skip?: number
    distinct?: VehicleScalarFieldEnum | VehicleScalarFieldEnum[]
  }

  /**
   * Vehicle create
   */
  export type VehicleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicle
     */
    omit?: VehicleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleInclude<ExtArgs> | null
    /**
     * The data needed to create a Vehicle.
     */
    data: XOR<VehicleCreateInput, VehicleUncheckedCreateInput>
  }

  /**
   * Vehicle createMany
   */
  export type VehicleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Vehicles.
     */
    data: VehicleCreateManyInput | VehicleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Vehicle createManyAndReturn
   */
  export type VehicleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicle
     */
    omit?: VehicleOmit<ExtArgs> | null
    /**
     * The data used to create many Vehicles.
     */
    data: VehicleCreateManyInput | VehicleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Vehicle update
   */
  export type VehicleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicle
     */
    omit?: VehicleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleInclude<ExtArgs> | null
    /**
     * The data needed to update a Vehicle.
     */
    data: XOR<VehicleUpdateInput, VehicleUncheckedUpdateInput>
    /**
     * Choose, which Vehicle to update.
     */
    where: VehicleWhereUniqueInput
  }

  /**
   * Vehicle updateMany
   */
  export type VehicleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Vehicles.
     */
    data: XOR<VehicleUpdateManyMutationInput, VehicleUncheckedUpdateManyInput>
    /**
     * Filter which Vehicles to update
     */
    where?: VehicleWhereInput
    /**
     * Limit how many Vehicles to update.
     */
    limit?: number
  }

  /**
   * Vehicle updateManyAndReturn
   */
  export type VehicleUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicle
     */
    omit?: VehicleOmit<ExtArgs> | null
    /**
     * The data used to update Vehicles.
     */
    data: XOR<VehicleUpdateManyMutationInput, VehicleUncheckedUpdateManyInput>
    /**
     * Filter which Vehicles to update
     */
    where?: VehicleWhereInput
    /**
     * Limit how many Vehicles to update.
     */
    limit?: number
  }

  /**
   * Vehicle upsert
   */
  export type VehicleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicle
     */
    omit?: VehicleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleInclude<ExtArgs> | null
    /**
     * The filter to search for the Vehicle to update in case it exists.
     */
    where: VehicleWhereUniqueInput
    /**
     * In case the Vehicle found by the `where` argument doesn't exist, create a new Vehicle with this data.
     */
    create: XOR<VehicleCreateInput, VehicleUncheckedCreateInput>
    /**
     * In case the Vehicle was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VehicleUpdateInput, VehicleUncheckedUpdateInput>
  }

  /**
   * Vehicle delete
   */
  export type VehicleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicle
     */
    omit?: VehicleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleInclude<ExtArgs> | null
    /**
     * Filter which Vehicle to delete.
     */
    where: VehicleWhereUniqueInput
  }

  /**
   * Vehicle deleteMany
   */
  export type VehicleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Vehicles to delete
     */
    where?: VehicleWhereInput
    /**
     * Limit how many Vehicles to delete.
     */
    limit?: number
  }

  /**
   * Vehicle.ParkingEntry
   */
  export type Vehicle$ParkingEntryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParkingEntry
     */
    select?: ParkingEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParkingEntry
     */
    omit?: ParkingEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParkingEntryInclude<ExtArgs> | null
    where?: ParkingEntryWhereInput
    orderBy?: ParkingEntryOrderByWithRelationInput | ParkingEntryOrderByWithRelationInput[]
    cursor?: ParkingEntryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ParkingEntryScalarFieldEnum | ParkingEntryScalarFieldEnum[]
  }

  /**
   * Vehicle without action
   */
  export type VehicleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicle
     */
    omit?: VehicleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleInclude<ExtArgs> | null
  }


  /**
   * Model ParkingEntry
   */

  export type AggregateParkingEntry = {
    _count: ParkingEntryCountAggregateOutputType | null
    _min: ParkingEntryMinAggregateOutputType | null
    _max: ParkingEntryMaxAggregateOutputType | null
  }

  export type ParkingEntryMinAggregateOutputType = {
    id: string | null
    vehicleId: string | null
    establishmentId: string | null
    isParked: boolean | null
    entryTime: Date | null
    exitTime: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ParkingEntryMaxAggregateOutputType = {
    id: string | null
    vehicleId: string | null
    establishmentId: string | null
    isParked: boolean | null
    entryTime: Date | null
    exitTime: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ParkingEntryCountAggregateOutputType = {
    id: number
    vehicleId: number
    establishmentId: number
    isParked: number
    entryTime: number
    exitTime: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ParkingEntryMinAggregateInputType = {
    id?: true
    vehicleId?: true
    establishmentId?: true
    isParked?: true
    entryTime?: true
    exitTime?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ParkingEntryMaxAggregateInputType = {
    id?: true
    vehicleId?: true
    establishmentId?: true
    isParked?: true
    entryTime?: true
    exitTime?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ParkingEntryCountAggregateInputType = {
    id?: true
    vehicleId?: true
    establishmentId?: true
    isParked?: true
    entryTime?: true
    exitTime?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ParkingEntryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ParkingEntry to aggregate.
     */
    where?: ParkingEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ParkingEntries to fetch.
     */
    orderBy?: ParkingEntryOrderByWithRelationInput | ParkingEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ParkingEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ParkingEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ParkingEntries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ParkingEntries
    **/
    _count?: true | ParkingEntryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ParkingEntryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ParkingEntryMaxAggregateInputType
  }

  export type GetParkingEntryAggregateType<T extends ParkingEntryAggregateArgs> = {
        [P in keyof T & keyof AggregateParkingEntry]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateParkingEntry[P]>
      : GetScalarType<T[P], AggregateParkingEntry[P]>
  }




  export type ParkingEntryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ParkingEntryWhereInput
    orderBy?: ParkingEntryOrderByWithAggregationInput | ParkingEntryOrderByWithAggregationInput[]
    by: ParkingEntryScalarFieldEnum[] | ParkingEntryScalarFieldEnum
    having?: ParkingEntryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ParkingEntryCountAggregateInputType | true
    _min?: ParkingEntryMinAggregateInputType
    _max?: ParkingEntryMaxAggregateInputType
  }

  export type ParkingEntryGroupByOutputType = {
    id: string
    vehicleId: string
    establishmentId: string
    isParked: boolean
    entryTime: Date
    exitTime: Date | null
    createdAt: Date
    updatedAt: Date
    _count: ParkingEntryCountAggregateOutputType | null
    _min: ParkingEntryMinAggregateOutputType | null
    _max: ParkingEntryMaxAggregateOutputType | null
  }

  type GetParkingEntryGroupByPayload<T extends ParkingEntryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ParkingEntryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ParkingEntryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ParkingEntryGroupByOutputType[P]>
            : GetScalarType<T[P], ParkingEntryGroupByOutputType[P]>
        }
      >
    >


  export type ParkingEntrySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    vehicleId?: boolean
    establishmentId?: boolean
    isParked?: boolean
    entryTime?: boolean
    exitTime?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    vehicle?: boolean | VehicleDefaultArgs<ExtArgs>
    establishment?: boolean | EstablishmentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["parkingEntry"]>

  export type ParkingEntrySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    vehicleId?: boolean
    establishmentId?: boolean
    isParked?: boolean
    entryTime?: boolean
    exitTime?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    vehicle?: boolean | VehicleDefaultArgs<ExtArgs>
    establishment?: boolean | EstablishmentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["parkingEntry"]>

  export type ParkingEntrySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    vehicleId?: boolean
    establishmentId?: boolean
    isParked?: boolean
    entryTime?: boolean
    exitTime?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    vehicle?: boolean | VehicleDefaultArgs<ExtArgs>
    establishment?: boolean | EstablishmentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["parkingEntry"]>

  export type ParkingEntrySelectScalar = {
    id?: boolean
    vehicleId?: boolean
    establishmentId?: boolean
    isParked?: boolean
    entryTime?: boolean
    exitTime?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ParkingEntryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "vehicleId" | "establishmentId" | "isParked" | "entryTime" | "exitTime" | "createdAt" | "updatedAt", ExtArgs["result"]["parkingEntry"]>
  export type ParkingEntryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vehicle?: boolean | VehicleDefaultArgs<ExtArgs>
    establishment?: boolean | EstablishmentDefaultArgs<ExtArgs>
  }
  export type ParkingEntryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vehicle?: boolean | VehicleDefaultArgs<ExtArgs>
    establishment?: boolean | EstablishmentDefaultArgs<ExtArgs>
  }
  export type ParkingEntryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vehicle?: boolean | VehicleDefaultArgs<ExtArgs>
    establishment?: boolean | EstablishmentDefaultArgs<ExtArgs>
  }

  export type $ParkingEntryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ParkingEntry"
    objects: {
      vehicle: Prisma.$VehiclePayload<ExtArgs>
      establishment: Prisma.$EstablishmentPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      vehicleId: string
      establishmentId: string
      isParked: boolean
      entryTime: Date
      exitTime: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["parkingEntry"]>
    composites: {}
  }

  type ParkingEntryGetPayload<S extends boolean | null | undefined | ParkingEntryDefaultArgs> = $Result.GetResult<Prisma.$ParkingEntryPayload, S>

  type ParkingEntryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ParkingEntryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ParkingEntryCountAggregateInputType | true
    }

  export interface ParkingEntryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ParkingEntry'], meta: { name: 'ParkingEntry' } }
    /**
     * Find zero or one ParkingEntry that matches the filter.
     * @param {ParkingEntryFindUniqueArgs} args - Arguments to find a ParkingEntry
     * @example
     * // Get one ParkingEntry
     * const parkingEntry = await prisma.parkingEntry.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ParkingEntryFindUniqueArgs>(args: SelectSubset<T, ParkingEntryFindUniqueArgs<ExtArgs>>): Prisma__ParkingEntryClient<$Result.GetResult<Prisma.$ParkingEntryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ParkingEntry that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ParkingEntryFindUniqueOrThrowArgs} args - Arguments to find a ParkingEntry
     * @example
     * // Get one ParkingEntry
     * const parkingEntry = await prisma.parkingEntry.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ParkingEntryFindUniqueOrThrowArgs>(args: SelectSubset<T, ParkingEntryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ParkingEntryClient<$Result.GetResult<Prisma.$ParkingEntryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ParkingEntry that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParkingEntryFindFirstArgs} args - Arguments to find a ParkingEntry
     * @example
     * // Get one ParkingEntry
     * const parkingEntry = await prisma.parkingEntry.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ParkingEntryFindFirstArgs>(args?: SelectSubset<T, ParkingEntryFindFirstArgs<ExtArgs>>): Prisma__ParkingEntryClient<$Result.GetResult<Prisma.$ParkingEntryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ParkingEntry that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParkingEntryFindFirstOrThrowArgs} args - Arguments to find a ParkingEntry
     * @example
     * // Get one ParkingEntry
     * const parkingEntry = await prisma.parkingEntry.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ParkingEntryFindFirstOrThrowArgs>(args?: SelectSubset<T, ParkingEntryFindFirstOrThrowArgs<ExtArgs>>): Prisma__ParkingEntryClient<$Result.GetResult<Prisma.$ParkingEntryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ParkingEntries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParkingEntryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ParkingEntries
     * const parkingEntries = await prisma.parkingEntry.findMany()
     * 
     * // Get first 10 ParkingEntries
     * const parkingEntries = await prisma.parkingEntry.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const parkingEntryWithIdOnly = await prisma.parkingEntry.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ParkingEntryFindManyArgs>(args?: SelectSubset<T, ParkingEntryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParkingEntryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ParkingEntry.
     * @param {ParkingEntryCreateArgs} args - Arguments to create a ParkingEntry.
     * @example
     * // Create one ParkingEntry
     * const ParkingEntry = await prisma.parkingEntry.create({
     *   data: {
     *     // ... data to create a ParkingEntry
     *   }
     * })
     * 
     */
    create<T extends ParkingEntryCreateArgs>(args: SelectSubset<T, ParkingEntryCreateArgs<ExtArgs>>): Prisma__ParkingEntryClient<$Result.GetResult<Prisma.$ParkingEntryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ParkingEntries.
     * @param {ParkingEntryCreateManyArgs} args - Arguments to create many ParkingEntries.
     * @example
     * // Create many ParkingEntries
     * const parkingEntry = await prisma.parkingEntry.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ParkingEntryCreateManyArgs>(args?: SelectSubset<T, ParkingEntryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ParkingEntries and returns the data saved in the database.
     * @param {ParkingEntryCreateManyAndReturnArgs} args - Arguments to create many ParkingEntries.
     * @example
     * // Create many ParkingEntries
     * const parkingEntry = await prisma.parkingEntry.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ParkingEntries and only return the `id`
     * const parkingEntryWithIdOnly = await prisma.parkingEntry.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ParkingEntryCreateManyAndReturnArgs>(args?: SelectSubset<T, ParkingEntryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParkingEntryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ParkingEntry.
     * @param {ParkingEntryDeleteArgs} args - Arguments to delete one ParkingEntry.
     * @example
     * // Delete one ParkingEntry
     * const ParkingEntry = await prisma.parkingEntry.delete({
     *   where: {
     *     // ... filter to delete one ParkingEntry
     *   }
     * })
     * 
     */
    delete<T extends ParkingEntryDeleteArgs>(args: SelectSubset<T, ParkingEntryDeleteArgs<ExtArgs>>): Prisma__ParkingEntryClient<$Result.GetResult<Prisma.$ParkingEntryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ParkingEntry.
     * @param {ParkingEntryUpdateArgs} args - Arguments to update one ParkingEntry.
     * @example
     * // Update one ParkingEntry
     * const parkingEntry = await prisma.parkingEntry.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ParkingEntryUpdateArgs>(args: SelectSubset<T, ParkingEntryUpdateArgs<ExtArgs>>): Prisma__ParkingEntryClient<$Result.GetResult<Prisma.$ParkingEntryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ParkingEntries.
     * @param {ParkingEntryDeleteManyArgs} args - Arguments to filter ParkingEntries to delete.
     * @example
     * // Delete a few ParkingEntries
     * const { count } = await prisma.parkingEntry.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ParkingEntryDeleteManyArgs>(args?: SelectSubset<T, ParkingEntryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ParkingEntries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParkingEntryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ParkingEntries
     * const parkingEntry = await prisma.parkingEntry.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ParkingEntryUpdateManyArgs>(args: SelectSubset<T, ParkingEntryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ParkingEntries and returns the data updated in the database.
     * @param {ParkingEntryUpdateManyAndReturnArgs} args - Arguments to update many ParkingEntries.
     * @example
     * // Update many ParkingEntries
     * const parkingEntry = await prisma.parkingEntry.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ParkingEntries and only return the `id`
     * const parkingEntryWithIdOnly = await prisma.parkingEntry.updateManyAndReturn({
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
    updateManyAndReturn<T extends ParkingEntryUpdateManyAndReturnArgs>(args: SelectSubset<T, ParkingEntryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParkingEntryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ParkingEntry.
     * @param {ParkingEntryUpsertArgs} args - Arguments to update or create a ParkingEntry.
     * @example
     * // Update or create a ParkingEntry
     * const parkingEntry = await prisma.parkingEntry.upsert({
     *   create: {
     *     // ... data to create a ParkingEntry
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ParkingEntry we want to update
     *   }
     * })
     */
    upsert<T extends ParkingEntryUpsertArgs>(args: SelectSubset<T, ParkingEntryUpsertArgs<ExtArgs>>): Prisma__ParkingEntryClient<$Result.GetResult<Prisma.$ParkingEntryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ParkingEntries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParkingEntryCountArgs} args - Arguments to filter ParkingEntries to count.
     * @example
     * // Count the number of ParkingEntries
     * const count = await prisma.parkingEntry.count({
     *   where: {
     *     // ... the filter for the ParkingEntries we want to count
     *   }
     * })
    **/
    count<T extends ParkingEntryCountArgs>(
      args?: Subset<T, ParkingEntryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ParkingEntryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ParkingEntry.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParkingEntryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ParkingEntryAggregateArgs>(args: Subset<T, ParkingEntryAggregateArgs>): Prisma.PrismaPromise<GetParkingEntryAggregateType<T>>

    /**
     * Group by ParkingEntry.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParkingEntryGroupByArgs} args - Group by arguments.
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
      T extends ParkingEntryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ParkingEntryGroupByArgs['orderBy'] }
        : { orderBy?: ParkingEntryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ParkingEntryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetParkingEntryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ParkingEntry model
   */
  readonly fields: ParkingEntryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ParkingEntry.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ParkingEntryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    vehicle<T extends VehicleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, VehicleDefaultArgs<ExtArgs>>): Prisma__VehicleClient<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    establishment<T extends EstablishmentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EstablishmentDefaultArgs<ExtArgs>>): Prisma__EstablishmentClient<$Result.GetResult<Prisma.$EstablishmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ParkingEntry model
   */ 
  interface ParkingEntryFieldRefs {
    readonly id: FieldRef<"ParkingEntry", 'String'>
    readonly vehicleId: FieldRef<"ParkingEntry", 'String'>
    readonly establishmentId: FieldRef<"ParkingEntry", 'String'>
    readonly isParked: FieldRef<"ParkingEntry", 'Boolean'>
    readonly entryTime: FieldRef<"ParkingEntry", 'DateTime'>
    readonly exitTime: FieldRef<"ParkingEntry", 'DateTime'>
    readonly createdAt: FieldRef<"ParkingEntry", 'DateTime'>
    readonly updatedAt: FieldRef<"ParkingEntry", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ParkingEntry findUnique
   */
  export type ParkingEntryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParkingEntry
     */
    select?: ParkingEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParkingEntry
     */
    omit?: ParkingEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParkingEntryInclude<ExtArgs> | null
    /**
     * Filter, which ParkingEntry to fetch.
     */
    where: ParkingEntryWhereUniqueInput
  }

  /**
   * ParkingEntry findUniqueOrThrow
   */
  export type ParkingEntryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParkingEntry
     */
    select?: ParkingEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParkingEntry
     */
    omit?: ParkingEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParkingEntryInclude<ExtArgs> | null
    /**
     * Filter, which ParkingEntry to fetch.
     */
    where: ParkingEntryWhereUniqueInput
  }

  /**
   * ParkingEntry findFirst
   */
  export type ParkingEntryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParkingEntry
     */
    select?: ParkingEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParkingEntry
     */
    omit?: ParkingEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParkingEntryInclude<ExtArgs> | null
    /**
     * Filter, which ParkingEntry to fetch.
     */
    where?: ParkingEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ParkingEntries to fetch.
     */
    orderBy?: ParkingEntryOrderByWithRelationInput | ParkingEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ParkingEntries.
     */
    cursor?: ParkingEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ParkingEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ParkingEntries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ParkingEntries.
     */
    distinct?: ParkingEntryScalarFieldEnum | ParkingEntryScalarFieldEnum[]
  }

  /**
   * ParkingEntry findFirstOrThrow
   */
  export type ParkingEntryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParkingEntry
     */
    select?: ParkingEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParkingEntry
     */
    omit?: ParkingEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParkingEntryInclude<ExtArgs> | null
    /**
     * Filter, which ParkingEntry to fetch.
     */
    where?: ParkingEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ParkingEntries to fetch.
     */
    orderBy?: ParkingEntryOrderByWithRelationInput | ParkingEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ParkingEntries.
     */
    cursor?: ParkingEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ParkingEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ParkingEntries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ParkingEntries.
     */
    distinct?: ParkingEntryScalarFieldEnum | ParkingEntryScalarFieldEnum[]
  }

  /**
   * ParkingEntry findMany
   */
  export type ParkingEntryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParkingEntry
     */
    select?: ParkingEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParkingEntry
     */
    omit?: ParkingEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParkingEntryInclude<ExtArgs> | null
    /**
     * Filter, which ParkingEntries to fetch.
     */
    where?: ParkingEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ParkingEntries to fetch.
     */
    orderBy?: ParkingEntryOrderByWithRelationInput | ParkingEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ParkingEntries.
     */
    cursor?: ParkingEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ParkingEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ParkingEntries.
     */
    skip?: number
    distinct?: ParkingEntryScalarFieldEnum | ParkingEntryScalarFieldEnum[]
  }

  /**
   * ParkingEntry create
   */
  export type ParkingEntryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParkingEntry
     */
    select?: ParkingEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParkingEntry
     */
    omit?: ParkingEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParkingEntryInclude<ExtArgs> | null
    /**
     * The data needed to create a ParkingEntry.
     */
    data: XOR<ParkingEntryCreateInput, ParkingEntryUncheckedCreateInput>
  }

  /**
   * ParkingEntry createMany
   */
  export type ParkingEntryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ParkingEntries.
     */
    data: ParkingEntryCreateManyInput | ParkingEntryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ParkingEntry createManyAndReturn
   */
  export type ParkingEntryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParkingEntry
     */
    select?: ParkingEntrySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ParkingEntry
     */
    omit?: ParkingEntryOmit<ExtArgs> | null
    /**
     * The data used to create many ParkingEntries.
     */
    data: ParkingEntryCreateManyInput | ParkingEntryCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParkingEntryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ParkingEntry update
   */
  export type ParkingEntryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParkingEntry
     */
    select?: ParkingEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParkingEntry
     */
    omit?: ParkingEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParkingEntryInclude<ExtArgs> | null
    /**
     * The data needed to update a ParkingEntry.
     */
    data: XOR<ParkingEntryUpdateInput, ParkingEntryUncheckedUpdateInput>
    /**
     * Choose, which ParkingEntry to update.
     */
    where: ParkingEntryWhereUniqueInput
  }

  /**
   * ParkingEntry updateMany
   */
  export type ParkingEntryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ParkingEntries.
     */
    data: XOR<ParkingEntryUpdateManyMutationInput, ParkingEntryUncheckedUpdateManyInput>
    /**
     * Filter which ParkingEntries to update
     */
    where?: ParkingEntryWhereInput
    /**
     * Limit how many ParkingEntries to update.
     */
    limit?: number
  }

  /**
   * ParkingEntry updateManyAndReturn
   */
  export type ParkingEntryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParkingEntry
     */
    select?: ParkingEntrySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ParkingEntry
     */
    omit?: ParkingEntryOmit<ExtArgs> | null
    /**
     * The data used to update ParkingEntries.
     */
    data: XOR<ParkingEntryUpdateManyMutationInput, ParkingEntryUncheckedUpdateManyInput>
    /**
     * Filter which ParkingEntries to update
     */
    where?: ParkingEntryWhereInput
    /**
     * Limit how many ParkingEntries to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParkingEntryIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ParkingEntry upsert
   */
  export type ParkingEntryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParkingEntry
     */
    select?: ParkingEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParkingEntry
     */
    omit?: ParkingEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParkingEntryInclude<ExtArgs> | null
    /**
     * The filter to search for the ParkingEntry to update in case it exists.
     */
    where: ParkingEntryWhereUniqueInput
    /**
     * In case the ParkingEntry found by the `where` argument doesn't exist, create a new ParkingEntry with this data.
     */
    create: XOR<ParkingEntryCreateInput, ParkingEntryUncheckedCreateInput>
    /**
     * In case the ParkingEntry was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ParkingEntryUpdateInput, ParkingEntryUncheckedUpdateInput>
  }

  /**
   * ParkingEntry delete
   */
  export type ParkingEntryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParkingEntry
     */
    select?: ParkingEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParkingEntry
     */
    omit?: ParkingEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParkingEntryInclude<ExtArgs> | null
    /**
     * Filter which ParkingEntry to delete.
     */
    where: ParkingEntryWhereUniqueInput
  }

  /**
   * ParkingEntry deleteMany
   */
  export type ParkingEntryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ParkingEntries to delete
     */
    where?: ParkingEntryWhereInput
    /**
     * Limit how many ParkingEntries to delete.
     */
    limit?: number
  }

  /**
   * ParkingEntry without action
   */
  export type ParkingEntryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParkingEntry
     */
    select?: ParkingEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParkingEntry
     */
    omit?: ParkingEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParkingEntryInclude<ExtArgs> | null
  }


  /**
   * Model Report
   */

  export type AggregateReport = {
    _count: ReportCountAggregateOutputType | null
    _min: ReportMinAggregateOutputType | null
    _max: ReportMaxAggregateOutputType | null
  }

  export type ReportMinAggregateOutputType = {
    id: string | null
    type: $Enums.ReportType | null
    createdBy: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ReportMaxAggregateOutputType = {
    id: string | null
    type: $Enums.ReportType | null
    createdBy: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ReportCountAggregateOutputType = {
    id: number
    type: number
    data: number
    createdBy: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ReportMinAggregateInputType = {
    id?: true
    type?: true
    createdBy?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ReportMaxAggregateInputType = {
    id?: true
    type?: true
    createdBy?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ReportCountAggregateInputType = {
    id?: true
    type?: true
    data?: true
    createdBy?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ReportAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Report to aggregate.
     */
    where?: ReportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reports to fetch.
     */
    orderBy?: ReportOrderByWithRelationInput | ReportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Reports
    **/
    _count?: true | ReportCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReportMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReportMaxAggregateInputType
  }

  export type GetReportAggregateType<T extends ReportAggregateArgs> = {
        [P in keyof T & keyof AggregateReport]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReport[P]>
      : GetScalarType<T[P], AggregateReport[P]>
  }




  export type ReportGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReportWhereInput
    orderBy?: ReportOrderByWithAggregationInput | ReportOrderByWithAggregationInput[]
    by: ReportScalarFieldEnum[] | ReportScalarFieldEnum
    having?: ReportScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReportCountAggregateInputType | true
    _min?: ReportMinAggregateInputType
    _max?: ReportMaxAggregateInputType
  }

  export type ReportGroupByOutputType = {
    id: string
    type: $Enums.ReportType
    data: JsonValue
    createdBy: string
    createdAt: Date
    updatedAt: Date
    _count: ReportCountAggregateOutputType | null
    _min: ReportMinAggregateOutputType | null
    _max: ReportMaxAggregateOutputType | null
  }

  type GetReportGroupByPayload<T extends ReportGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReportGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReportGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReportGroupByOutputType[P]>
            : GetScalarType<T[P], ReportGroupByOutputType[P]>
        }
      >
    >


  export type ReportSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    data?: boolean
    createdBy?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["report"]>

  export type ReportSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    data?: boolean
    createdBy?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["report"]>

  export type ReportSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    data?: boolean
    createdBy?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["report"]>

  export type ReportSelectScalar = {
    id?: boolean
    type?: boolean
    data?: boolean
    createdBy?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ReportOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "type" | "data" | "createdBy" | "createdAt" | "updatedAt", ExtArgs["result"]["report"]>
  export type ReportInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ReportIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ReportIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ReportPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Report"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      type: $Enums.ReportType
      data: Prisma.JsonValue
      createdBy: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["report"]>
    composites: {}
  }

  type ReportGetPayload<S extends boolean | null | undefined | ReportDefaultArgs> = $Result.GetResult<Prisma.$ReportPayload, S>

  type ReportCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ReportFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ReportCountAggregateInputType | true
    }

  export interface ReportDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Report'], meta: { name: 'Report' } }
    /**
     * Find zero or one Report that matches the filter.
     * @param {ReportFindUniqueArgs} args - Arguments to find a Report
     * @example
     * // Get one Report
     * const report = await prisma.report.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ReportFindUniqueArgs>(args: SelectSubset<T, ReportFindUniqueArgs<ExtArgs>>): Prisma__ReportClient<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Report that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ReportFindUniqueOrThrowArgs} args - Arguments to find a Report
     * @example
     * // Get one Report
     * const report = await prisma.report.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ReportFindUniqueOrThrowArgs>(args: SelectSubset<T, ReportFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ReportClient<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Report that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReportFindFirstArgs} args - Arguments to find a Report
     * @example
     * // Get one Report
     * const report = await prisma.report.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ReportFindFirstArgs>(args?: SelectSubset<T, ReportFindFirstArgs<ExtArgs>>): Prisma__ReportClient<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Report that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReportFindFirstOrThrowArgs} args - Arguments to find a Report
     * @example
     * // Get one Report
     * const report = await prisma.report.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ReportFindFirstOrThrowArgs>(args?: SelectSubset<T, ReportFindFirstOrThrowArgs<ExtArgs>>): Prisma__ReportClient<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Reports that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReportFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Reports
     * const reports = await prisma.report.findMany()
     * 
     * // Get first 10 Reports
     * const reports = await prisma.report.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const reportWithIdOnly = await prisma.report.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ReportFindManyArgs>(args?: SelectSubset<T, ReportFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Report.
     * @param {ReportCreateArgs} args - Arguments to create a Report.
     * @example
     * // Create one Report
     * const Report = await prisma.report.create({
     *   data: {
     *     // ... data to create a Report
     *   }
     * })
     * 
     */
    create<T extends ReportCreateArgs>(args: SelectSubset<T, ReportCreateArgs<ExtArgs>>): Prisma__ReportClient<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Reports.
     * @param {ReportCreateManyArgs} args - Arguments to create many Reports.
     * @example
     * // Create many Reports
     * const report = await prisma.report.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ReportCreateManyArgs>(args?: SelectSubset<T, ReportCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Reports and returns the data saved in the database.
     * @param {ReportCreateManyAndReturnArgs} args - Arguments to create many Reports.
     * @example
     * // Create many Reports
     * const report = await prisma.report.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Reports and only return the `id`
     * const reportWithIdOnly = await prisma.report.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ReportCreateManyAndReturnArgs>(args?: SelectSubset<T, ReportCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Report.
     * @param {ReportDeleteArgs} args - Arguments to delete one Report.
     * @example
     * // Delete one Report
     * const Report = await prisma.report.delete({
     *   where: {
     *     // ... filter to delete one Report
     *   }
     * })
     * 
     */
    delete<T extends ReportDeleteArgs>(args: SelectSubset<T, ReportDeleteArgs<ExtArgs>>): Prisma__ReportClient<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Report.
     * @param {ReportUpdateArgs} args - Arguments to update one Report.
     * @example
     * // Update one Report
     * const report = await prisma.report.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ReportUpdateArgs>(args: SelectSubset<T, ReportUpdateArgs<ExtArgs>>): Prisma__ReportClient<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Reports.
     * @param {ReportDeleteManyArgs} args - Arguments to filter Reports to delete.
     * @example
     * // Delete a few Reports
     * const { count } = await prisma.report.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ReportDeleteManyArgs>(args?: SelectSubset<T, ReportDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reports.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReportUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Reports
     * const report = await prisma.report.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ReportUpdateManyArgs>(args: SelectSubset<T, ReportUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reports and returns the data updated in the database.
     * @param {ReportUpdateManyAndReturnArgs} args - Arguments to update many Reports.
     * @example
     * // Update many Reports
     * const report = await prisma.report.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Reports and only return the `id`
     * const reportWithIdOnly = await prisma.report.updateManyAndReturn({
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
    updateManyAndReturn<T extends ReportUpdateManyAndReturnArgs>(args: SelectSubset<T, ReportUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Report.
     * @param {ReportUpsertArgs} args - Arguments to update or create a Report.
     * @example
     * // Update or create a Report
     * const report = await prisma.report.upsert({
     *   create: {
     *     // ... data to create a Report
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Report we want to update
     *   }
     * })
     */
    upsert<T extends ReportUpsertArgs>(args: SelectSubset<T, ReportUpsertArgs<ExtArgs>>): Prisma__ReportClient<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Reports.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReportCountArgs} args - Arguments to filter Reports to count.
     * @example
     * // Count the number of Reports
     * const count = await prisma.report.count({
     *   where: {
     *     // ... the filter for the Reports we want to count
     *   }
     * })
    **/
    count<T extends ReportCountArgs>(
      args?: Subset<T, ReportCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReportCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Report.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReportAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ReportAggregateArgs>(args: Subset<T, ReportAggregateArgs>): Prisma.PrismaPromise<GetReportAggregateType<T>>

    /**
     * Group by Report.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReportGroupByArgs} args - Group by arguments.
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
      T extends ReportGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReportGroupByArgs['orderBy'] }
        : { orderBy?: ReportGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ReportGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReportGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Report model
   */
  readonly fields: ReportFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Report.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReportClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Report model
   */ 
  interface ReportFieldRefs {
    readonly id: FieldRef<"Report", 'String'>
    readonly type: FieldRef<"Report", 'ReportType'>
    readonly data: FieldRef<"Report", 'Json'>
    readonly createdBy: FieldRef<"Report", 'String'>
    readonly createdAt: FieldRef<"Report", 'DateTime'>
    readonly updatedAt: FieldRef<"Report", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Report findUnique
   */
  export type ReportFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Report
     */
    omit?: ReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportInclude<ExtArgs> | null
    /**
     * Filter, which Report to fetch.
     */
    where: ReportWhereUniqueInput
  }

  /**
   * Report findUniqueOrThrow
   */
  export type ReportFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Report
     */
    omit?: ReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportInclude<ExtArgs> | null
    /**
     * Filter, which Report to fetch.
     */
    where: ReportWhereUniqueInput
  }

  /**
   * Report findFirst
   */
  export type ReportFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Report
     */
    omit?: ReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportInclude<ExtArgs> | null
    /**
     * Filter, which Report to fetch.
     */
    where?: ReportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reports to fetch.
     */
    orderBy?: ReportOrderByWithRelationInput | ReportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reports.
     */
    cursor?: ReportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reports.
     */
    distinct?: ReportScalarFieldEnum | ReportScalarFieldEnum[]
  }

  /**
   * Report findFirstOrThrow
   */
  export type ReportFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Report
     */
    omit?: ReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportInclude<ExtArgs> | null
    /**
     * Filter, which Report to fetch.
     */
    where?: ReportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reports to fetch.
     */
    orderBy?: ReportOrderByWithRelationInput | ReportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reports.
     */
    cursor?: ReportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reports.
     */
    distinct?: ReportScalarFieldEnum | ReportScalarFieldEnum[]
  }

  /**
   * Report findMany
   */
  export type ReportFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Report
     */
    omit?: ReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportInclude<ExtArgs> | null
    /**
     * Filter, which Reports to fetch.
     */
    where?: ReportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reports to fetch.
     */
    orderBy?: ReportOrderByWithRelationInput | ReportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Reports.
     */
    cursor?: ReportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reports.
     */
    skip?: number
    distinct?: ReportScalarFieldEnum | ReportScalarFieldEnum[]
  }

  /**
   * Report create
   */
  export type ReportCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Report
     */
    omit?: ReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportInclude<ExtArgs> | null
    /**
     * The data needed to create a Report.
     */
    data: XOR<ReportCreateInput, ReportUncheckedCreateInput>
  }

  /**
   * Report createMany
   */
  export type ReportCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Reports.
     */
    data: ReportCreateManyInput | ReportCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Report createManyAndReturn
   */
  export type ReportCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Report
     */
    omit?: ReportOmit<ExtArgs> | null
    /**
     * The data used to create many Reports.
     */
    data: ReportCreateManyInput | ReportCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Report update
   */
  export type ReportUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Report
     */
    omit?: ReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportInclude<ExtArgs> | null
    /**
     * The data needed to update a Report.
     */
    data: XOR<ReportUpdateInput, ReportUncheckedUpdateInput>
    /**
     * Choose, which Report to update.
     */
    where: ReportWhereUniqueInput
  }

  /**
   * Report updateMany
   */
  export type ReportUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Reports.
     */
    data: XOR<ReportUpdateManyMutationInput, ReportUncheckedUpdateManyInput>
    /**
     * Filter which Reports to update
     */
    where?: ReportWhereInput
    /**
     * Limit how many Reports to update.
     */
    limit?: number
  }

  /**
   * Report updateManyAndReturn
   */
  export type ReportUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Report
     */
    omit?: ReportOmit<ExtArgs> | null
    /**
     * The data used to update Reports.
     */
    data: XOR<ReportUpdateManyMutationInput, ReportUncheckedUpdateManyInput>
    /**
     * Filter which Reports to update
     */
    where?: ReportWhereInput
    /**
     * Limit how many Reports to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Report upsert
   */
  export type ReportUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Report
     */
    omit?: ReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportInclude<ExtArgs> | null
    /**
     * The filter to search for the Report to update in case it exists.
     */
    where: ReportWhereUniqueInput
    /**
     * In case the Report found by the `where` argument doesn't exist, create a new Report with this data.
     */
    create: XOR<ReportCreateInput, ReportUncheckedCreateInput>
    /**
     * In case the Report was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReportUpdateInput, ReportUncheckedUpdateInput>
  }

  /**
   * Report delete
   */
  export type ReportDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Report
     */
    omit?: ReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportInclude<ExtArgs> | null
    /**
     * Filter which Report to delete.
     */
    where: ReportWhereUniqueInput
  }

  /**
   * Report deleteMany
   */
  export type ReportDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Reports to delete
     */
    where?: ReportWhereInput
    /**
     * Limit how many Reports to delete.
     */
    limit?: number
  }

  /**
   * Report without action
   */
  export type ReportDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Report
     */
    omit?: ReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportInclude<ExtArgs> | null
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
    username: 'username',
    fullName: 'fullName',
    email: 'email',
    password: 'password',
    role: 'role',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const EstablishmentScalarFieldEnum: {
    id: 'id',
    name: 'name',
    address: 'address',
    phone: 'phone',
    motorcycleSlots: 'motorcycleSlots',
    carSlots: 'carSlots',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type EstablishmentScalarFieldEnum = (typeof EstablishmentScalarFieldEnum)[keyof typeof EstablishmentScalarFieldEnum]


  export const VehicleScalarFieldEnum: {
    id: 'id',
    brand: 'brand',
    model: 'model',
    color: 'color',
    plate: 'plate',
    type: 'type',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type VehicleScalarFieldEnum = (typeof VehicleScalarFieldEnum)[keyof typeof VehicleScalarFieldEnum]


  export const ParkingEntryScalarFieldEnum: {
    id: 'id',
    vehicleId: 'vehicleId',
    establishmentId: 'establishmentId',
    isParked: 'isParked',
    entryTime: 'entryTime',
    exitTime: 'exitTime',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ParkingEntryScalarFieldEnum = (typeof ParkingEntryScalarFieldEnum)[keyof typeof ParkingEntryScalarFieldEnum]


  export const ReportScalarFieldEnum: {
    id: 'id',
    type: 'type',
    data: 'data',
    createdBy: 'createdBy',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ReportScalarFieldEnum = (typeof ReportScalarFieldEnum)[keyof typeof ReportScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


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


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


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
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'VehicleType'
   */
  export type EnumVehicleTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'VehicleType'>
    


  /**
   * Reference to a field of type 'VehicleType[]'
   */
  export type ListEnumVehicleTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'VehicleType[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'ReportType'
   */
  export type EnumReportTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ReportType'>
    


  /**
   * Reference to a field of type 'ReportType[]'
   */
  export type ListEnumReportTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ReportType[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


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
    username?: StringFilter<"User"> | string
    fullName?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    Report?: ReportListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    fullName?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    Report?: ReportOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    username?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    fullName?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    Report?: ReportListRelationFilter
  }, "id" | "username" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
    fullName?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    username?: StringWithAggregatesFilter<"User"> | string
    fullName?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type EstablishmentWhereInput = {
    AND?: EstablishmentWhereInput | EstablishmentWhereInput[]
    OR?: EstablishmentWhereInput[]
    NOT?: EstablishmentWhereInput | EstablishmentWhereInput[]
    id?: StringFilter<"Establishment"> | string
    name?: StringFilter<"Establishment"> | string
    address?: StringFilter<"Establishment"> | string
    phone?: StringFilter<"Establishment"> | string
    motorcycleSlots?: IntFilter<"Establishment"> | number
    carSlots?: IntFilter<"Establishment"> | number
    createdAt?: DateTimeFilter<"Establishment"> | Date | string
    updatedAt?: DateTimeFilter<"Establishment"> | Date | string
    ParkingEntry?: ParkingEntryListRelationFilter
  }

  export type EstablishmentOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    phone?: SortOrder
    motorcycleSlots?: SortOrder
    carSlots?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ParkingEntry?: ParkingEntryOrderByRelationAggregateInput
  }

  export type EstablishmentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: EstablishmentWhereInput | EstablishmentWhereInput[]
    OR?: EstablishmentWhereInput[]
    NOT?: EstablishmentWhereInput | EstablishmentWhereInput[]
    name?: StringFilter<"Establishment"> | string
    address?: StringFilter<"Establishment"> | string
    phone?: StringFilter<"Establishment"> | string
    motorcycleSlots?: IntFilter<"Establishment"> | number
    carSlots?: IntFilter<"Establishment"> | number
    createdAt?: DateTimeFilter<"Establishment"> | Date | string
    updatedAt?: DateTimeFilter<"Establishment"> | Date | string
    ParkingEntry?: ParkingEntryListRelationFilter
  }, "id">

  export type EstablishmentOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    phone?: SortOrder
    motorcycleSlots?: SortOrder
    carSlots?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: EstablishmentCountOrderByAggregateInput
    _avg?: EstablishmentAvgOrderByAggregateInput
    _max?: EstablishmentMaxOrderByAggregateInput
    _min?: EstablishmentMinOrderByAggregateInput
    _sum?: EstablishmentSumOrderByAggregateInput
  }

  export type EstablishmentScalarWhereWithAggregatesInput = {
    AND?: EstablishmentScalarWhereWithAggregatesInput | EstablishmentScalarWhereWithAggregatesInput[]
    OR?: EstablishmentScalarWhereWithAggregatesInput[]
    NOT?: EstablishmentScalarWhereWithAggregatesInput | EstablishmentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Establishment"> | string
    name?: StringWithAggregatesFilter<"Establishment"> | string
    address?: StringWithAggregatesFilter<"Establishment"> | string
    phone?: StringWithAggregatesFilter<"Establishment"> | string
    motorcycleSlots?: IntWithAggregatesFilter<"Establishment"> | number
    carSlots?: IntWithAggregatesFilter<"Establishment"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Establishment"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Establishment"> | Date | string
  }

  export type VehicleWhereInput = {
    AND?: VehicleWhereInput | VehicleWhereInput[]
    OR?: VehicleWhereInput[]
    NOT?: VehicleWhereInput | VehicleWhereInput[]
    id?: StringFilter<"Vehicle"> | string
    brand?: StringFilter<"Vehicle"> | string
    model?: StringFilter<"Vehicle"> | string
    color?: StringFilter<"Vehicle"> | string
    plate?: StringFilter<"Vehicle"> | string
    type?: EnumVehicleTypeFilter<"Vehicle"> | $Enums.VehicleType
    createdAt?: DateTimeFilter<"Vehicle"> | Date | string
    updatedAt?: DateTimeFilter<"Vehicle"> | Date | string
    ParkingEntry?: ParkingEntryListRelationFilter
  }

  export type VehicleOrderByWithRelationInput = {
    id?: SortOrder
    brand?: SortOrder
    model?: SortOrder
    color?: SortOrder
    plate?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ParkingEntry?: ParkingEntryOrderByRelationAggregateInput
  }

  export type VehicleWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    plate?: string
    AND?: VehicleWhereInput | VehicleWhereInput[]
    OR?: VehicleWhereInput[]
    NOT?: VehicleWhereInput | VehicleWhereInput[]
    brand?: StringFilter<"Vehicle"> | string
    model?: StringFilter<"Vehicle"> | string
    color?: StringFilter<"Vehicle"> | string
    type?: EnumVehicleTypeFilter<"Vehicle"> | $Enums.VehicleType
    createdAt?: DateTimeFilter<"Vehicle"> | Date | string
    updatedAt?: DateTimeFilter<"Vehicle"> | Date | string
    ParkingEntry?: ParkingEntryListRelationFilter
  }, "id" | "plate">

  export type VehicleOrderByWithAggregationInput = {
    id?: SortOrder
    brand?: SortOrder
    model?: SortOrder
    color?: SortOrder
    plate?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: VehicleCountOrderByAggregateInput
    _max?: VehicleMaxOrderByAggregateInput
    _min?: VehicleMinOrderByAggregateInput
  }

  export type VehicleScalarWhereWithAggregatesInput = {
    AND?: VehicleScalarWhereWithAggregatesInput | VehicleScalarWhereWithAggregatesInput[]
    OR?: VehicleScalarWhereWithAggregatesInput[]
    NOT?: VehicleScalarWhereWithAggregatesInput | VehicleScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Vehicle"> | string
    brand?: StringWithAggregatesFilter<"Vehicle"> | string
    model?: StringWithAggregatesFilter<"Vehicle"> | string
    color?: StringWithAggregatesFilter<"Vehicle"> | string
    plate?: StringWithAggregatesFilter<"Vehicle"> | string
    type?: EnumVehicleTypeWithAggregatesFilter<"Vehicle"> | $Enums.VehicleType
    createdAt?: DateTimeWithAggregatesFilter<"Vehicle"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Vehicle"> | Date | string
  }

  export type ParkingEntryWhereInput = {
    AND?: ParkingEntryWhereInput | ParkingEntryWhereInput[]
    OR?: ParkingEntryWhereInput[]
    NOT?: ParkingEntryWhereInput | ParkingEntryWhereInput[]
    id?: StringFilter<"ParkingEntry"> | string
    vehicleId?: StringFilter<"ParkingEntry"> | string
    establishmentId?: StringFilter<"ParkingEntry"> | string
    isParked?: BoolFilter<"ParkingEntry"> | boolean
    entryTime?: DateTimeFilter<"ParkingEntry"> | Date | string
    exitTime?: DateTimeNullableFilter<"ParkingEntry"> | Date | string | null
    createdAt?: DateTimeFilter<"ParkingEntry"> | Date | string
    updatedAt?: DateTimeFilter<"ParkingEntry"> | Date | string
    vehicle?: XOR<VehicleScalarRelationFilter, VehicleWhereInput>
    establishment?: XOR<EstablishmentScalarRelationFilter, EstablishmentWhereInput>
  }

  export type ParkingEntryOrderByWithRelationInput = {
    id?: SortOrder
    vehicleId?: SortOrder
    establishmentId?: SortOrder
    isParked?: SortOrder
    entryTime?: SortOrder
    exitTime?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    vehicle?: VehicleOrderByWithRelationInput
    establishment?: EstablishmentOrderByWithRelationInput
  }

  export type ParkingEntryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ParkingEntryWhereInput | ParkingEntryWhereInput[]
    OR?: ParkingEntryWhereInput[]
    NOT?: ParkingEntryWhereInput | ParkingEntryWhereInput[]
    vehicleId?: StringFilter<"ParkingEntry"> | string
    establishmentId?: StringFilter<"ParkingEntry"> | string
    isParked?: BoolFilter<"ParkingEntry"> | boolean
    entryTime?: DateTimeFilter<"ParkingEntry"> | Date | string
    exitTime?: DateTimeNullableFilter<"ParkingEntry"> | Date | string | null
    createdAt?: DateTimeFilter<"ParkingEntry"> | Date | string
    updatedAt?: DateTimeFilter<"ParkingEntry"> | Date | string
    vehicle?: XOR<VehicleScalarRelationFilter, VehicleWhereInput>
    establishment?: XOR<EstablishmentScalarRelationFilter, EstablishmentWhereInput>
  }, "id">

  export type ParkingEntryOrderByWithAggregationInput = {
    id?: SortOrder
    vehicleId?: SortOrder
    establishmentId?: SortOrder
    isParked?: SortOrder
    entryTime?: SortOrder
    exitTime?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ParkingEntryCountOrderByAggregateInput
    _max?: ParkingEntryMaxOrderByAggregateInput
    _min?: ParkingEntryMinOrderByAggregateInput
  }

  export type ParkingEntryScalarWhereWithAggregatesInput = {
    AND?: ParkingEntryScalarWhereWithAggregatesInput | ParkingEntryScalarWhereWithAggregatesInput[]
    OR?: ParkingEntryScalarWhereWithAggregatesInput[]
    NOT?: ParkingEntryScalarWhereWithAggregatesInput | ParkingEntryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ParkingEntry"> | string
    vehicleId?: StringWithAggregatesFilter<"ParkingEntry"> | string
    establishmentId?: StringWithAggregatesFilter<"ParkingEntry"> | string
    isParked?: BoolWithAggregatesFilter<"ParkingEntry"> | boolean
    entryTime?: DateTimeWithAggregatesFilter<"ParkingEntry"> | Date | string
    exitTime?: DateTimeNullableWithAggregatesFilter<"ParkingEntry"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"ParkingEntry"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ParkingEntry"> | Date | string
  }

  export type ReportWhereInput = {
    AND?: ReportWhereInput | ReportWhereInput[]
    OR?: ReportWhereInput[]
    NOT?: ReportWhereInput | ReportWhereInput[]
    id?: StringFilter<"Report"> | string
    type?: EnumReportTypeFilter<"Report"> | $Enums.ReportType
    data?: JsonFilter<"Report">
    createdBy?: StringFilter<"Report"> | string
    createdAt?: DateTimeFilter<"Report"> | Date | string
    updatedAt?: DateTimeFilter<"Report"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type ReportOrderByWithRelationInput = {
    id?: SortOrder
    type?: SortOrder
    data?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type ReportWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ReportWhereInput | ReportWhereInput[]
    OR?: ReportWhereInput[]
    NOT?: ReportWhereInput | ReportWhereInput[]
    type?: EnumReportTypeFilter<"Report"> | $Enums.ReportType
    data?: JsonFilter<"Report">
    createdBy?: StringFilter<"Report"> | string
    createdAt?: DateTimeFilter<"Report"> | Date | string
    updatedAt?: DateTimeFilter<"Report"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type ReportOrderByWithAggregationInput = {
    id?: SortOrder
    type?: SortOrder
    data?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ReportCountOrderByAggregateInput
    _max?: ReportMaxOrderByAggregateInput
    _min?: ReportMinOrderByAggregateInput
  }

  export type ReportScalarWhereWithAggregatesInput = {
    AND?: ReportScalarWhereWithAggregatesInput | ReportScalarWhereWithAggregatesInput[]
    OR?: ReportScalarWhereWithAggregatesInput[]
    NOT?: ReportScalarWhereWithAggregatesInput | ReportScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Report"> | string
    type?: EnumReportTypeWithAggregatesFilter<"Report"> | $Enums.ReportType
    data?: JsonWithAggregatesFilter<"Report">
    createdBy?: StringWithAggregatesFilter<"Report"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Report"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Report"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    username: string
    fullName: string
    email: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    Report?: ReportCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    username: string
    fullName: string
    email: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    Report?: ReportUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Report?: ReportUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Report?: ReportUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    username: string
    fullName: string
    email: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EstablishmentCreateInput = {
    id?: string
    name: string
    address: string
    phone: string
    motorcycleSlots: number
    carSlots: number
    createdAt?: Date | string
    updatedAt?: Date | string
    ParkingEntry?: ParkingEntryCreateNestedManyWithoutEstablishmentInput
  }

  export type EstablishmentUncheckedCreateInput = {
    id?: string
    name: string
    address: string
    phone: string
    motorcycleSlots: number
    carSlots: number
    createdAt?: Date | string
    updatedAt?: Date | string
    ParkingEntry?: ParkingEntryUncheckedCreateNestedManyWithoutEstablishmentInput
  }

  export type EstablishmentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    motorcycleSlots?: IntFieldUpdateOperationsInput | number
    carSlots?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ParkingEntry?: ParkingEntryUpdateManyWithoutEstablishmentNestedInput
  }

  export type EstablishmentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    motorcycleSlots?: IntFieldUpdateOperationsInput | number
    carSlots?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ParkingEntry?: ParkingEntryUncheckedUpdateManyWithoutEstablishmentNestedInput
  }

  export type EstablishmentCreateManyInput = {
    id?: string
    name: string
    address: string
    phone: string
    motorcycleSlots: number
    carSlots: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EstablishmentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    motorcycleSlots?: IntFieldUpdateOperationsInput | number
    carSlots?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EstablishmentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    motorcycleSlots?: IntFieldUpdateOperationsInput | number
    carSlots?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VehicleCreateInput = {
    id?: string
    brand: string
    model: string
    color: string
    plate: string
    type: $Enums.VehicleType
    createdAt?: Date | string
    updatedAt?: Date | string
    ParkingEntry?: ParkingEntryCreateNestedManyWithoutVehicleInput
  }

  export type VehicleUncheckedCreateInput = {
    id?: string
    brand: string
    model: string
    color: string
    plate: string
    type: $Enums.VehicleType
    createdAt?: Date | string
    updatedAt?: Date | string
    ParkingEntry?: ParkingEntryUncheckedCreateNestedManyWithoutVehicleInput
  }

  export type VehicleUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    plate?: StringFieldUpdateOperationsInput | string
    type?: EnumVehicleTypeFieldUpdateOperationsInput | $Enums.VehicleType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ParkingEntry?: ParkingEntryUpdateManyWithoutVehicleNestedInput
  }

  export type VehicleUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    plate?: StringFieldUpdateOperationsInput | string
    type?: EnumVehicleTypeFieldUpdateOperationsInput | $Enums.VehicleType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ParkingEntry?: ParkingEntryUncheckedUpdateManyWithoutVehicleNestedInput
  }

  export type VehicleCreateManyInput = {
    id?: string
    brand: string
    model: string
    color: string
    plate: string
    type: $Enums.VehicleType
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VehicleUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    plate?: StringFieldUpdateOperationsInput | string
    type?: EnumVehicleTypeFieldUpdateOperationsInput | $Enums.VehicleType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VehicleUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    plate?: StringFieldUpdateOperationsInput | string
    type?: EnumVehicleTypeFieldUpdateOperationsInput | $Enums.VehicleType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ParkingEntryCreateInput = {
    id?: string
    isParked?: boolean
    entryTime?: Date | string
    exitTime?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    vehicle: VehicleCreateNestedOneWithoutParkingEntryInput
    establishment: EstablishmentCreateNestedOneWithoutParkingEntryInput
  }

  export type ParkingEntryUncheckedCreateInput = {
    id?: string
    vehicleId: string
    establishmentId: string
    isParked?: boolean
    entryTime?: Date | string
    exitTime?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ParkingEntryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    isParked?: BoolFieldUpdateOperationsInput | boolean
    entryTime?: DateTimeFieldUpdateOperationsInput | Date | string
    exitTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vehicle?: VehicleUpdateOneRequiredWithoutParkingEntryNestedInput
    establishment?: EstablishmentUpdateOneRequiredWithoutParkingEntryNestedInput
  }

  export type ParkingEntryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    vehicleId?: StringFieldUpdateOperationsInput | string
    establishmentId?: StringFieldUpdateOperationsInput | string
    isParked?: BoolFieldUpdateOperationsInput | boolean
    entryTime?: DateTimeFieldUpdateOperationsInput | Date | string
    exitTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ParkingEntryCreateManyInput = {
    id?: string
    vehicleId: string
    establishmentId: string
    isParked?: boolean
    entryTime?: Date | string
    exitTime?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ParkingEntryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    isParked?: BoolFieldUpdateOperationsInput | boolean
    entryTime?: DateTimeFieldUpdateOperationsInput | Date | string
    exitTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ParkingEntryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    vehicleId?: StringFieldUpdateOperationsInput | string
    establishmentId?: StringFieldUpdateOperationsInput | string
    isParked?: BoolFieldUpdateOperationsInput | boolean
    entryTime?: DateTimeFieldUpdateOperationsInput | Date | string
    exitTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReportCreateInput = {
    id?: string
    type: $Enums.ReportType
    data: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutReportInput
  }

  export type ReportUncheckedCreateInput = {
    id?: string
    type: $Enums.ReportType
    data: JsonNullValueInput | InputJsonValue
    createdBy: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReportUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumReportTypeFieldUpdateOperationsInput | $Enums.ReportType
    data?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutReportNestedInput
  }

  export type ReportUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumReportTypeFieldUpdateOperationsInput | $Enums.ReportType
    data?: JsonNullValueInput | InputJsonValue
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReportCreateManyInput = {
    id?: string
    type: $Enums.ReportType
    data: JsonNullValueInput | InputJsonValue
    createdBy: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReportUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumReportTypeFieldUpdateOperationsInput | $Enums.ReportType
    data?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReportUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumReportTypeFieldUpdateOperationsInput | $Enums.ReportType
    data?: JsonNullValueInput | InputJsonValue
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
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

  export type ReportListRelationFilter = {
    every?: ReportWhereInput
    some?: ReportWhereInput
    none?: ReportWhereInput
  }

  export type ReportOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    fullName?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    fullName?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    fullName?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
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

  export type ParkingEntryListRelationFilter = {
    every?: ParkingEntryWhereInput
    some?: ParkingEntryWhereInput
    none?: ParkingEntryWhereInput
  }

  export type ParkingEntryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EstablishmentCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    phone?: SortOrder
    motorcycleSlots?: SortOrder
    carSlots?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EstablishmentAvgOrderByAggregateInput = {
    motorcycleSlots?: SortOrder
    carSlots?: SortOrder
  }

  export type EstablishmentMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    phone?: SortOrder
    motorcycleSlots?: SortOrder
    carSlots?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EstablishmentMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    phone?: SortOrder
    motorcycleSlots?: SortOrder
    carSlots?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EstablishmentSumOrderByAggregateInput = {
    motorcycleSlots?: SortOrder
    carSlots?: SortOrder
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

  export type EnumVehicleTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.VehicleType | EnumVehicleTypeFieldRefInput<$PrismaModel>
    in?: $Enums.VehicleType[] | ListEnumVehicleTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.VehicleType[] | ListEnumVehicleTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumVehicleTypeFilter<$PrismaModel> | $Enums.VehicleType
  }

  export type VehicleCountOrderByAggregateInput = {
    id?: SortOrder
    brand?: SortOrder
    model?: SortOrder
    color?: SortOrder
    plate?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VehicleMaxOrderByAggregateInput = {
    id?: SortOrder
    brand?: SortOrder
    model?: SortOrder
    color?: SortOrder
    plate?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VehicleMinOrderByAggregateInput = {
    id?: SortOrder
    brand?: SortOrder
    model?: SortOrder
    color?: SortOrder
    plate?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumVehicleTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.VehicleType | EnumVehicleTypeFieldRefInput<$PrismaModel>
    in?: $Enums.VehicleType[] | ListEnumVehicleTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.VehicleType[] | ListEnumVehicleTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumVehicleTypeWithAggregatesFilter<$PrismaModel> | $Enums.VehicleType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumVehicleTypeFilter<$PrismaModel>
    _max?: NestedEnumVehicleTypeFilter<$PrismaModel>
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type VehicleScalarRelationFilter = {
    is?: VehicleWhereInput
    isNot?: VehicleWhereInput
  }

  export type EstablishmentScalarRelationFilter = {
    is?: EstablishmentWhereInput
    isNot?: EstablishmentWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ParkingEntryCountOrderByAggregateInput = {
    id?: SortOrder
    vehicleId?: SortOrder
    establishmentId?: SortOrder
    isParked?: SortOrder
    entryTime?: SortOrder
    exitTime?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ParkingEntryMaxOrderByAggregateInput = {
    id?: SortOrder
    vehicleId?: SortOrder
    establishmentId?: SortOrder
    isParked?: SortOrder
    entryTime?: SortOrder
    exitTime?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ParkingEntryMinOrderByAggregateInput = {
    id?: SortOrder
    vehicleId?: SortOrder
    establishmentId?: SortOrder
    isParked?: SortOrder
    entryTime?: SortOrder
    exitTime?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type EnumReportTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ReportType | EnumReportTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ReportType[] | ListEnumReportTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ReportType[] | ListEnumReportTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumReportTypeFilter<$PrismaModel> | $Enums.ReportType
  }
  export type JsonFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type ReportCountOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    data?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ReportMaxOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ReportMinOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumReportTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ReportType | EnumReportTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ReportType[] | ListEnumReportTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ReportType[] | ListEnumReportTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumReportTypeWithAggregatesFilter<$PrismaModel> | $Enums.ReportType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumReportTypeFilter<$PrismaModel>
    _max?: NestedEnumReportTypeFilter<$PrismaModel>
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type ReportCreateNestedManyWithoutUserInput = {
    create?: XOR<ReportCreateWithoutUserInput, ReportUncheckedCreateWithoutUserInput> | ReportCreateWithoutUserInput[] | ReportUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReportCreateOrConnectWithoutUserInput | ReportCreateOrConnectWithoutUserInput[]
    createMany?: ReportCreateManyUserInputEnvelope
    connect?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
  }

  export type ReportUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ReportCreateWithoutUserInput, ReportUncheckedCreateWithoutUserInput> | ReportCreateWithoutUserInput[] | ReportUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReportCreateOrConnectWithoutUserInput | ReportCreateOrConnectWithoutUserInput[]
    createMany?: ReportCreateManyUserInputEnvelope
    connect?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ReportUpdateManyWithoutUserNestedInput = {
    create?: XOR<ReportCreateWithoutUserInput, ReportUncheckedCreateWithoutUserInput> | ReportCreateWithoutUserInput[] | ReportUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReportCreateOrConnectWithoutUserInput | ReportCreateOrConnectWithoutUserInput[]
    upsert?: ReportUpsertWithWhereUniqueWithoutUserInput | ReportUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ReportCreateManyUserInputEnvelope
    set?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
    disconnect?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
    delete?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
    connect?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
    update?: ReportUpdateWithWhereUniqueWithoutUserInput | ReportUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ReportUpdateManyWithWhereWithoutUserInput | ReportUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ReportScalarWhereInput | ReportScalarWhereInput[]
  }

  export type ReportUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ReportCreateWithoutUserInput, ReportUncheckedCreateWithoutUserInput> | ReportCreateWithoutUserInput[] | ReportUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReportCreateOrConnectWithoutUserInput | ReportCreateOrConnectWithoutUserInput[]
    upsert?: ReportUpsertWithWhereUniqueWithoutUserInput | ReportUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ReportCreateManyUserInputEnvelope
    set?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
    disconnect?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
    delete?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
    connect?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
    update?: ReportUpdateWithWhereUniqueWithoutUserInput | ReportUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ReportUpdateManyWithWhereWithoutUserInput | ReportUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ReportScalarWhereInput | ReportScalarWhereInput[]
  }

  export type ParkingEntryCreateNestedManyWithoutEstablishmentInput = {
    create?: XOR<ParkingEntryCreateWithoutEstablishmentInput, ParkingEntryUncheckedCreateWithoutEstablishmentInput> | ParkingEntryCreateWithoutEstablishmentInput[] | ParkingEntryUncheckedCreateWithoutEstablishmentInput[]
    connectOrCreate?: ParkingEntryCreateOrConnectWithoutEstablishmentInput | ParkingEntryCreateOrConnectWithoutEstablishmentInput[]
    createMany?: ParkingEntryCreateManyEstablishmentInputEnvelope
    connect?: ParkingEntryWhereUniqueInput | ParkingEntryWhereUniqueInput[]
  }

  export type ParkingEntryUncheckedCreateNestedManyWithoutEstablishmentInput = {
    create?: XOR<ParkingEntryCreateWithoutEstablishmentInput, ParkingEntryUncheckedCreateWithoutEstablishmentInput> | ParkingEntryCreateWithoutEstablishmentInput[] | ParkingEntryUncheckedCreateWithoutEstablishmentInput[]
    connectOrCreate?: ParkingEntryCreateOrConnectWithoutEstablishmentInput | ParkingEntryCreateOrConnectWithoutEstablishmentInput[]
    createMany?: ParkingEntryCreateManyEstablishmentInputEnvelope
    connect?: ParkingEntryWhereUniqueInput | ParkingEntryWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ParkingEntryUpdateManyWithoutEstablishmentNestedInput = {
    create?: XOR<ParkingEntryCreateWithoutEstablishmentInput, ParkingEntryUncheckedCreateWithoutEstablishmentInput> | ParkingEntryCreateWithoutEstablishmentInput[] | ParkingEntryUncheckedCreateWithoutEstablishmentInput[]
    connectOrCreate?: ParkingEntryCreateOrConnectWithoutEstablishmentInput | ParkingEntryCreateOrConnectWithoutEstablishmentInput[]
    upsert?: ParkingEntryUpsertWithWhereUniqueWithoutEstablishmentInput | ParkingEntryUpsertWithWhereUniqueWithoutEstablishmentInput[]
    createMany?: ParkingEntryCreateManyEstablishmentInputEnvelope
    set?: ParkingEntryWhereUniqueInput | ParkingEntryWhereUniqueInput[]
    disconnect?: ParkingEntryWhereUniqueInput | ParkingEntryWhereUniqueInput[]
    delete?: ParkingEntryWhereUniqueInput | ParkingEntryWhereUniqueInput[]
    connect?: ParkingEntryWhereUniqueInput | ParkingEntryWhereUniqueInput[]
    update?: ParkingEntryUpdateWithWhereUniqueWithoutEstablishmentInput | ParkingEntryUpdateWithWhereUniqueWithoutEstablishmentInput[]
    updateMany?: ParkingEntryUpdateManyWithWhereWithoutEstablishmentInput | ParkingEntryUpdateManyWithWhereWithoutEstablishmentInput[]
    deleteMany?: ParkingEntryScalarWhereInput | ParkingEntryScalarWhereInput[]
  }

  export type ParkingEntryUncheckedUpdateManyWithoutEstablishmentNestedInput = {
    create?: XOR<ParkingEntryCreateWithoutEstablishmentInput, ParkingEntryUncheckedCreateWithoutEstablishmentInput> | ParkingEntryCreateWithoutEstablishmentInput[] | ParkingEntryUncheckedCreateWithoutEstablishmentInput[]
    connectOrCreate?: ParkingEntryCreateOrConnectWithoutEstablishmentInput | ParkingEntryCreateOrConnectWithoutEstablishmentInput[]
    upsert?: ParkingEntryUpsertWithWhereUniqueWithoutEstablishmentInput | ParkingEntryUpsertWithWhereUniqueWithoutEstablishmentInput[]
    createMany?: ParkingEntryCreateManyEstablishmentInputEnvelope
    set?: ParkingEntryWhereUniqueInput | ParkingEntryWhereUniqueInput[]
    disconnect?: ParkingEntryWhereUniqueInput | ParkingEntryWhereUniqueInput[]
    delete?: ParkingEntryWhereUniqueInput | ParkingEntryWhereUniqueInput[]
    connect?: ParkingEntryWhereUniqueInput | ParkingEntryWhereUniqueInput[]
    update?: ParkingEntryUpdateWithWhereUniqueWithoutEstablishmentInput | ParkingEntryUpdateWithWhereUniqueWithoutEstablishmentInput[]
    updateMany?: ParkingEntryUpdateManyWithWhereWithoutEstablishmentInput | ParkingEntryUpdateManyWithWhereWithoutEstablishmentInput[]
    deleteMany?: ParkingEntryScalarWhereInput | ParkingEntryScalarWhereInput[]
  }

  export type ParkingEntryCreateNestedManyWithoutVehicleInput = {
    create?: XOR<ParkingEntryCreateWithoutVehicleInput, ParkingEntryUncheckedCreateWithoutVehicleInput> | ParkingEntryCreateWithoutVehicleInput[] | ParkingEntryUncheckedCreateWithoutVehicleInput[]
    connectOrCreate?: ParkingEntryCreateOrConnectWithoutVehicleInput | ParkingEntryCreateOrConnectWithoutVehicleInput[]
    createMany?: ParkingEntryCreateManyVehicleInputEnvelope
    connect?: ParkingEntryWhereUniqueInput | ParkingEntryWhereUniqueInput[]
  }

  export type ParkingEntryUncheckedCreateNestedManyWithoutVehicleInput = {
    create?: XOR<ParkingEntryCreateWithoutVehicleInput, ParkingEntryUncheckedCreateWithoutVehicleInput> | ParkingEntryCreateWithoutVehicleInput[] | ParkingEntryUncheckedCreateWithoutVehicleInput[]
    connectOrCreate?: ParkingEntryCreateOrConnectWithoutVehicleInput | ParkingEntryCreateOrConnectWithoutVehicleInput[]
    createMany?: ParkingEntryCreateManyVehicleInputEnvelope
    connect?: ParkingEntryWhereUniqueInput | ParkingEntryWhereUniqueInput[]
  }

  export type EnumVehicleTypeFieldUpdateOperationsInput = {
    set?: $Enums.VehicleType
  }

  export type ParkingEntryUpdateManyWithoutVehicleNestedInput = {
    create?: XOR<ParkingEntryCreateWithoutVehicleInput, ParkingEntryUncheckedCreateWithoutVehicleInput> | ParkingEntryCreateWithoutVehicleInput[] | ParkingEntryUncheckedCreateWithoutVehicleInput[]
    connectOrCreate?: ParkingEntryCreateOrConnectWithoutVehicleInput | ParkingEntryCreateOrConnectWithoutVehicleInput[]
    upsert?: ParkingEntryUpsertWithWhereUniqueWithoutVehicleInput | ParkingEntryUpsertWithWhereUniqueWithoutVehicleInput[]
    createMany?: ParkingEntryCreateManyVehicleInputEnvelope
    set?: ParkingEntryWhereUniqueInput | ParkingEntryWhereUniqueInput[]
    disconnect?: ParkingEntryWhereUniqueInput | ParkingEntryWhereUniqueInput[]
    delete?: ParkingEntryWhereUniqueInput | ParkingEntryWhereUniqueInput[]
    connect?: ParkingEntryWhereUniqueInput | ParkingEntryWhereUniqueInput[]
    update?: ParkingEntryUpdateWithWhereUniqueWithoutVehicleInput | ParkingEntryUpdateWithWhereUniqueWithoutVehicleInput[]
    updateMany?: ParkingEntryUpdateManyWithWhereWithoutVehicleInput | ParkingEntryUpdateManyWithWhereWithoutVehicleInput[]
    deleteMany?: ParkingEntryScalarWhereInput | ParkingEntryScalarWhereInput[]
  }

  export type ParkingEntryUncheckedUpdateManyWithoutVehicleNestedInput = {
    create?: XOR<ParkingEntryCreateWithoutVehicleInput, ParkingEntryUncheckedCreateWithoutVehicleInput> | ParkingEntryCreateWithoutVehicleInput[] | ParkingEntryUncheckedCreateWithoutVehicleInput[]
    connectOrCreate?: ParkingEntryCreateOrConnectWithoutVehicleInput | ParkingEntryCreateOrConnectWithoutVehicleInput[]
    upsert?: ParkingEntryUpsertWithWhereUniqueWithoutVehicleInput | ParkingEntryUpsertWithWhereUniqueWithoutVehicleInput[]
    createMany?: ParkingEntryCreateManyVehicleInputEnvelope
    set?: ParkingEntryWhereUniqueInput | ParkingEntryWhereUniqueInput[]
    disconnect?: ParkingEntryWhereUniqueInput | ParkingEntryWhereUniqueInput[]
    delete?: ParkingEntryWhereUniqueInput | ParkingEntryWhereUniqueInput[]
    connect?: ParkingEntryWhereUniqueInput | ParkingEntryWhereUniqueInput[]
    update?: ParkingEntryUpdateWithWhereUniqueWithoutVehicleInput | ParkingEntryUpdateWithWhereUniqueWithoutVehicleInput[]
    updateMany?: ParkingEntryUpdateManyWithWhereWithoutVehicleInput | ParkingEntryUpdateManyWithWhereWithoutVehicleInput[]
    deleteMany?: ParkingEntryScalarWhereInput | ParkingEntryScalarWhereInput[]
  }

  export type VehicleCreateNestedOneWithoutParkingEntryInput = {
    create?: XOR<VehicleCreateWithoutParkingEntryInput, VehicleUncheckedCreateWithoutParkingEntryInput>
    connectOrCreate?: VehicleCreateOrConnectWithoutParkingEntryInput
    connect?: VehicleWhereUniqueInput
  }

  export type EstablishmentCreateNestedOneWithoutParkingEntryInput = {
    create?: XOR<EstablishmentCreateWithoutParkingEntryInput, EstablishmentUncheckedCreateWithoutParkingEntryInput>
    connectOrCreate?: EstablishmentCreateOrConnectWithoutParkingEntryInput
    connect?: EstablishmentWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type VehicleUpdateOneRequiredWithoutParkingEntryNestedInput = {
    create?: XOR<VehicleCreateWithoutParkingEntryInput, VehicleUncheckedCreateWithoutParkingEntryInput>
    connectOrCreate?: VehicleCreateOrConnectWithoutParkingEntryInput
    upsert?: VehicleUpsertWithoutParkingEntryInput
    connect?: VehicleWhereUniqueInput
    update?: XOR<XOR<VehicleUpdateToOneWithWhereWithoutParkingEntryInput, VehicleUpdateWithoutParkingEntryInput>, VehicleUncheckedUpdateWithoutParkingEntryInput>
  }

  export type EstablishmentUpdateOneRequiredWithoutParkingEntryNestedInput = {
    create?: XOR<EstablishmentCreateWithoutParkingEntryInput, EstablishmentUncheckedCreateWithoutParkingEntryInput>
    connectOrCreate?: EstablishmentCreateOrConnectWithoutParkingEntryInput
    upsert?: EstablishmentUpsertWithoutParkingEntryInput
    connect?: EstablishmentWhereUniqueInput
    update?: XOR<XOR<EstablishmentUpdateToOneWithWhereWithoutParkingEntryInput, EstablishmentUpdateWithoutParkingEntryInput>, EstablishmentUncheckedUpdateWithoutParkingEntryInput>
  }

  export type UserCreateNestedOneWithoutReportInput = {
    create?: XOR<UserCreateWithoutReportInput, UserUncheckedCreateWithoutReportInput>
    connectOrCreate?: UserCreateOrConnectWithoutReportInput
    connect?: UserWhereUniqueInput
  }

  export type EnumReportTypeFieldUpdateOperationsInput = {
    set?: $Enums.ReportType
  }

  export type UserUpdateOneRequiredWithoutReportNestedInput = {
    create?: XOR<UserCreateWithoutReportInput, UserUncheckedCreateWithoutReportInput>
    connectOrCreate?: UserCreateOrConnectWithoutReportInput
    upsert?: UserUpsertWithoutReportInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutReportInput, UserUpdateWithoutReportInput>, UserUncheckedUpdateWithoutReportInput>
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

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
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

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
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

  export type NestedEnumVehicleTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.VehicleType | EnumVehicleTypeFieldRefInput<$PrismaModel>
    in?: $Enums.VehicleType[] | ListEnumVehicleTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.VehicleType[] | ListEnumVehicleTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumVehicleTypeFilter<$PrismaModel> | $Enums.VehicleType
  }

  export type NestedEnumVehicleTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.VehicleType | EnumVehicleTypeFieldRefInput<$PrismaModel>
    in?: $Enums.VehicleType[] | ListEnumVehicleTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.VehicleType[] | ListEnumVehicleTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumVehicleTypeWithAggregatesFilter<$PrismaModel> | $Enums.VehicleType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumVehicleTypeFilter<$PrismaModel>
    _max?: NestedEnumVehicleTypeFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type NestedEnumReportTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ReportType | EnumReportTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ReportType[] | ListEnumReportTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ReportType[] | ListEnumReportTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumReportTypeFilter<$PrismaModel> | $Enums.ReportType
  }

  export type NestedEnumReportTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ReportType | EnumReportTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ReportType[] | ListEnumReportTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ReportType[] | ListEnumReportTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumReportTypeWithAggregatesFilter<$PrismaModel> | $Enums.ReportType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumReportTypeFilter<$PrismaModel>
    _max?: NestedEnumReportTypeFilter<$PrismaModel>
  }
  export type NestedJsonFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type ReportCreateWithoutUserInput = {
    id?: string
    type: $Enums.ReportType
    data: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReportUncheckedCreateWithoutUserInput = {
    id?: string
    type: $Enums.ReportType
    data: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReportCreateOrConnectWithoutUserInput = {
    where: ReportWhereUniqueInput
    create: XOR<ReportCreateWithoutUserInput, ReportUncheckedCreateWithoutUserInput>
  }

  export type ReportCreateManyUserInputEnvelope = {
    data: ReportCreateManyUserInput | ReportCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ReportUpsertWithWhereUniqueWithoutUserInput = {
    where: ReportWhereUniqueInput
    update: XOR<ReportUpdateWithoutUserInput, ReportUncheckedUpdateWithoutUserInput>
    create: XOR<ReportCreateWithoutUserInput, ReportUncheckedCreateWithoutUserInput>
  }

  export type ReportUpdateWithWhereUniqueWithoutUserInput = {
    where: ReportWhereUniqueInput
    data: XOR<ReportUpdateWithoutUserInput, ReportUncheckedUpdateWithoutUserInput>
  }

  export type ReportUpdateManyWithWhereWithoutUserInput = {
    where: ReportScalarWhereInput
    data: XOR<ReportUpdateManyMutationInput, ReportUncheckedUpdateManyWithoutUserInput>
  }

  export type ReportScalarWhereInput = {
    AND?: ReportScalarWhereInput | ReportScalarWhereInput[]
    OR?: ReportScalarWhereInput[]
    NOT?: ReportScalarWhereInput | ReportScalarWhereInput[]
    id?: StringFilter<"Report"> | string
    type?: EnumReportTypeFilter<"Report"> | $Enums.ReportType
    data?: JsonFilter<"Report">
    createdBy?: StringFilter<"Report"> | string
    createdAt?: DateTimeFilter<"Report"> | Date | string
    updatedAt?: DateTimeFilter<"Report"> | Date | string
  }

  export type ParkingEntryCreateWithoutEstablishmentInput = {
    id?: string
    isParked?: boolean
    entryTime?: Date | string
    exitTime?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    vehicle: VehicleCreateNestedOneWithoutParkingEntryInput
  }

  export type ParkingEntryUncheckedCreateWithoutEstablishmentInput = {
    id?: string
    vehicleId: string
    isParked?: boolean
    entryTime?: Date | string
    exitTime?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ParkingEntryCreateOrConnectWithoutEstablishmentInput = {
    where: ParkingEntryWhereUniqueInput
    create: XOR<ParkingEntryCreateWithoutEstablishmentInput, ParkingEntryUncheckedCreateWithoutEstablishmentInput>
  }

  export type ParkingEntryCreateManyEstablishmentInputEnvelope = {
    data: ParkingEntryCreateManyEstablishmentInput | ParkingEntryCreateManyEstablishmentInput[]
    skipDuplicates?: boolean
  }

  export type ParkingEntryUpsertWithWhereUniqueWithoutEstablishmentInput = {
    where: ParkingEntryWhereUniqueInput
    update: XOR<ParkingEntryUpdateWithoutEstablishmentInput, ParkingEntryUncheckedUpdateWithoutEstablishmentInput>
    create: XOR<ParkingEntryCreateWithoutEstablishmentInput, ParkingEntryUncheckedCreateWithoutEstablishmentInput>
  }

  export type ParkingEntryUpdateWithWhereUniqueWithoutEstablishmentInput = {
    where: ParkingEntryWhereUniqueInput
    data: XOR<ParkingEntryUpdateWithoutEstablishmentInput, ParkingEntryUncheckedUpdateWithoutEstablishmentInput>
  }

  export type ParkingEntryUpdateManyWithWhereWithoutEstablishmentInput = {
    where: ParkingEntryScalarWhereInput
    data: XOR<ParkingEntryUpdateManyMutationInput, ParkingEntryUncheckedUpdateManyWithoutEstablishmentInput>
  }

  export type ParkingEntryScalarWhereInput = {
    AND?: ParkingEntryScalarWhereInput | ParkingEntryScalarWhereInput[]
    OR?: ParkingEntryScalarWhereInput[]
    NOT?: ParkingEntryScalarWhereInput | ParkingEntryScalarWhereInput[]
    id?: StringFilter<"ParkingEntry"> | string
    vehicleId?: StringFilter<"ParkingEntry"> | string
    establishmentId?: StringFilter<"ParkingEntry"> | string
    isParked?: BoolFilter<"ParkingEntry"> | boolean
    entryTime?: DateTimeFilter<"ParkingEntry"> | Date | string
    exitTime?: DateTimeNullableFilter<"ParkingEntry"> | Date | string | null
    createdAt?: DateTimeFilter<"ParkingEntry"> | Date | string
    updatedAt?: DateTimeFilter<"ParkingEntry"> | Date | string
  }

  export type ParkingEntryCreateWithoutVehicleInput = {
    id?: string
    isParked?: boolean
    entryTime?: Date | string
    exitTime?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    establishment: EstablishmentCreateNestedOneWithoutParkingEntryInput
  }

  export type ParkingEntryUncheckedCreateWithoutVehicleInput = {
    id?: string
    establishmentId: string
    isParked?: boolean
    entryTime?: Date | string
    exitTime?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ParkingEntryCreateOrConnectWithoutVehicleInput = {
    where: ParkingEntryWhereUniqueInput
    create: XOR<ParkingEntryCreateWithoutVehicleInput, ParkingEntryUncheckedCreateWithoutVehicleInput>
  }

  export type ParkingEntryCreateManyVehicleInputEnvelope = {
    data: ParkingEntryCreateManyVehicleInput | ParkingEntryCreateManyVehicleInput[]
    skipDuplicates?: boolean
  }

  export type ParkingEntryUpsertWithWhereUniqueWithoutVehicleInput = {
    where: ParkingEntryWhereUniqueInput
    update: XOR<ParkingEntryUpdateWithoutVehicleInput, ParkingEntryUncheckedUpdateWithoutVehicleInput>
    create: XOR<ParkingEntryCreateWithoutVehicleInput, ParkingEntryUncheckedCreateWithoutVehicleInput>
  }

  export type ParkingEntryUpdateWithWhereUniqueWithoutVehicleInput = {
    where: ParkingEntryWhereUniqueInput
    data: XOR<ParkingEntryUpdateWithoutVehicleInput, ParkingEntryUncheckedUpdateWithoutVehicleInput>
  }

  export type ParkingEntryUpdateManyWithWhereWithoutVehicleInput = {
    where: ParkingEntryScalarWhereInput
    data: XOR<ParkingEntryUpdateManyMutationInput, ParkingEntryUncheckedUpdateManyWithoutVehicleInput>
  }

  export type VehicleCreateWithoutParkingEntryInput = {
    id?: string
    brand: string
    model: string
    color: string
    plate: string
    type: $Enums.VehicleType
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VehicleUncheckedCreateWithoutParkingEntryInput = {
    id?: string
    brand: string
    model: string
    color: string
    plate: string
    type: $Enums.VehicleType
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VehicleCreateOrConnectWithoutParkingEntryInput = {
    where: VehicleWhereUniqueInput
    create: XOR<VehicleCreateWithoutParkingEntryInput, VehicleUncheckedCreateWithoutParkingEntryInput>
  }

  export type EstablishmentCreateWithoutParkingEntryInput = {
    id?: string
    name: string
    address: string
    phone: string
    motorcycleSlots: number
    carSlots: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EstablishmentUncheckedCreateWithoutParkingEntryInput = {
    id?: string
    name: string
    address: string
    phone: string
    motorcycleSlots: number
    carSlots: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EstablishmentCreateOrConnectWithoutParkingEntryInput = {
    where: EstablishmentWhereUniqueInput
    create: XOR<EstablishmentCreateWithoutParkingEntryInput, EstablishmentUncheckedCreateWithoutParkingEntryInput>
  }

  export type VehicleUpsertWithoutParkingEntryInput = {
    update: XOR<VehicleUpdateWithoutParkingEntryInput, VehicleUncheckedUpdateWithoutParkingEntryInput>
    create: XOR<VehicleCreateWithoutParkingEntryInput, VehicleUncheckedCreateWithoutParkingEntryInput>
    where?: VehicleWhereInput
  }

  export type VehicleUpdateToOneWithWhereWithoutParkingEntryInput = {
    where?: VehicleWhereInput
    data: XOR<VehicleUpdateWithoutParkingEntryInput, VehicleUncheckedUpdateWithoutParkingEntryInput>
  }

  export type VehicleUpdateWithoutParkingEntryInput = {
    id?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    plate?: StringFieldUpdateOperationsInput | string
    type?: EnumVehicleTypeFieldUpdateOperationsInput | $Enums.VehicleType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VehicleUncheckedUpdateWithoutParkingEntryInput = {
    id?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    plate?: StringFieldUpdateOperationsInput | string
    type?: EnumVehicleTypeFieldUpdateOperationsInput | $Enums.VehicleType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EstablishmentUpsertWithoutParkingEntryInput = {
    update: XOR<EstablishmentUpdateWithoutParkingEntryInput, EstablishmentUncheckedUpdateWithoutParkingEntryInput>
    create: XOR<EstablishmentCreateWithoutParkingEntryInput, EstablishmentUncheckedCreateWithoutParkingEntryInput>
    where?: EstablishmentWhereInput
  }

  export type EstablishmentUpdateToOneWithWhereWithoutParkingEntryInput = {
    where?: EstablishmentWhereInput
    data: XOR<EstablishmentUpdateWithoutParkingEntryInput, EstablishmentUncheckedUpdateWithoutParkingEntryInput>
  }

  export type EstablishmentUpdateWithoutParkingEntryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    motorcycleSlots?: IntFieldUpdateOperationsInput | number
    carSlots?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EstablishmentUncheckedUpdateWithoutParkingEntryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    motorcycleSlots?: IntFieldUpdateOperationsInput | number
    carSlots?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateWithoutReportInput = {
    id?: string
    username: string
    fullName: string
    email: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUncheckedCreateWithoutReportInput = {
    id?: string
    username: string
    fullName: string
    email: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserCreateOrConnectWithoutReportInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutReportInput, UserUncheckedCreateWithoutReportInput>
  }

  export type UserUpsertWithoutReportInput = {
    update: XOR<UserUpdateWithoutReportInput, UserUncheckedUpdateWithoutReportInput>
    create: XOR<UserCreateWithoutReportInput, UserUncheckedCreateWithoutReportInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutReportInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutReportInput, UserUncheckedUpdateWithoutReportInput>
  }

  export type UserUpdateWithoutReportInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateWithoutReportInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReportCreateManyUserInput = {
    id?: string
    type: $Enums.ReportType
    data: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReportUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumReportTypeFieldUpdateOperationsInput | $Enums.ReportType
    data?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReportUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumReportTypeFieldUpdateOperationsInput | $Enums.ReportType
    data?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReportUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumReportTypeFieldUpdateOperationsInput | $Enums.ReportType
    data?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ParkingEntryCreateManyEstablishmentInput = {
    id?: string
    vehicleId: string
    isParked?: boolean
    entryTime?: Date | string
    exitTime?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ParkingEntryUpdateWithoutEstablishmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    isParked?: BoolFieldUpdateOperationsInput | boolean
    entryTime?: DateTimeFieldUpdateOperationsInput | Date | string
    exitTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vehicle?: VehicleUpdateOneRequiredWithoutParkingEntryNestedInput
  }

  export type ParkingEntryUncheckedUpdateWithoutEstablishmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    vehicleId?: StringFieldUpdateOperationsInput | string
    isParked?: BoolFieldUpdateOperationsInput | boolean
    entryTime?: DateTimeFieldUpdateOperationsInput | Date | string
    exitTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ParkingEntryUncheckedUpdateManyWithoutEstablishmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    vehicleId?: StringFieldUpdateOperationsInput | string
    isParked?: BoolFieldUpdateOperationsInput | boolean
    entryTime?: DateTimeFieldUpdateOperationsInput | Date | string
    exitTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ParkingEntryCreateManyVehicleInput = {
    id?: string
    establishmentId: string
    isParked?: boolean
    entryTime?: Date | string
    exitTime?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ParkingEntryUpdateWithoutVehicleInput = {
    id?: StringFieldUpdateOperationsInput | string
    isParked?: BoolFieldUpdateOperationsInput | boolean
    entryTime?: DateTimeFieldUpdateOperationsInput | Date | string
    exitTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    establishment?: EstablishmentUpdateOneRequiredWithoutParkingEntryNestedInput
  }

  export type ParkingEntryUncheckedUpdateWithoutVehicleInput = {
    id?: StringFieldUpdateOperationsInput | string
    establishmentId?: StringFieldUpdateOperationsInput | string
    isParked?: BoolFieldUpdateOperationsInput | boolean
    entryTime?: DateTimeFieldUpdateOperationsInput | Date | string
    exitTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ParkingEntryUncheckedUpdateManyWithoutVehicleInput = {
    id?: StringFieldUpdateOperationsInput | string
    establishmentId?: StringFieldUpdateOperationsInput | string
    isParked?: BoolFieldUpdateOperationsInput | boolean
    entryTime?: DateTimeFieldUpdateOperationsInput | Date | string
    exitTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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