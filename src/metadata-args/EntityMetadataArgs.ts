import {ColumnMetadata} from "../metadata/ColumnMetadata";
import {NamingStrategyInterface} from "../naming-strategy/NamingStrategyInterface";
import {TableMetadata} from "../metadata/TableMetadata";
import {RelationMetadata} from "../metadata/RelationMetadata";
import {IndexMetadata} from "../metadata/IndexMetadata";
import {ForeignKeyMetadata} from "../metadata/ForeignKeyMetadata";

/**
 * Arguments for EntityMetadata class.
 */
export interface EntityMetadataArgs {

    readonly namingStrategy: NamingStrategyInterface;
    readonly tableMetadata: TableMetadata;
    readonly columnMetadatas?: ColumnMetadata[];
    readonly relationMetadatas?: RelationMetadata[];
    readonly indexMetadatas?: IndexMetadata[];
    readonly foreignKeyMetadatas?: ForeignKeyMetadata[];
    
}